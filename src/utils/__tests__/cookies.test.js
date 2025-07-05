import Cookies from '../cookies';

// Mock dependencies
jest.mock('universal-cookie', () => {
  const mockCookie = {
    get: jest.fn(),
    set: jest.fn(),
    remove: jest.fn(),
  };
  
  return jest.fn(() => mockCookie);
});

jest.mock('constants/configs', () => ({
  COOKIE_PREFIX: 'test-app',
  COOKIE_SECRET_KEY: 'test-secret-key'
}));

jest.mock('../encrypts', () => ({
  encrypt: jest.fn((value) => ({ toString: () => `encrypted-${JSON.stringify(value)}` })),
  decrypt: jest.fn((value) => {
    const prefix = 'encrypted-';
    if (value.startsWith(prefix)) {
      return JSON.parse(value.substring(prefix.length));
    }
    return value;
  })
}));

import Cookie from 'universal-cookie';
import { encrypt, decrypt } from '../encrypts';

// Get the mocked cookie instance
const mockCookieInstance = new Cookie();

describe('Cookies utility', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('session management', () => {
    it('should get session from encrypted cookie', () => {
      const mockSessionData = { userId: 123, username: 'testuser' };
      mockCookieInstance.get.mockReturnValue(`encrypted-${JSON.stringify(mockSessionData)}`);
      
      const session = Cookies.session;
      
      expect(mockCookieInstance.get).toHaveBeenCalledWith('test-app-session', undefined);
      expect(decrypt).toHaveBeenCalledWith(`encrypted-${JSON.stringify(mockSessionData)}`, 'test-secret-key');
      expect(session).toEqual(mockSessionData);
    });

    it('should return null for empty session cookie', () => {
      mockCookieInstance.get.mockReturnValue(null);
      
      const session = Cookies.session;
      
      expect(session).toBeNull();
    });

    it('should set session with remember option', () => {
      const sessionData = { userId: 123, username: 'testuser' };
      const sessionObj = { session: sessionData, remember: true };
      
      Cookies.session = sessionObj;
      
      expect(encrypt).toHaveBeenCalledWith(sessionData, 'test-secret-key');
      expect(mockCookieInstance.set).toHaveBeenCalledWith(
        'test-app-session',
        `encrypted-${JSON.stringify(sessionData)}`,
        { maxAge: 604800 } // 7 days in seconds
      );
    });

    it('should set session without remember option', () => {
      const sessionData = { userId: 123, username: 'testuser' };
      const sessionObj = { session: sessionData, remember: false };
      
      Cookies.session = sessionObj;
      
      expect(encrypt).toHaveBeenCalledWith(sessionData, 'test-secret-key');
      expect(mockCookieInstance.set).toHaveBeenCalledWith(
        'test-app-session',
        `encrypted-${JSON.stringify(sessionData)}`,
        undefined
      );
    });

    it('should remove session when setting empty value', () => {
      const sessionObj = { session: null, remember: false };
      
      Cookies.session = sessionObj;
      
      expect(mockCookieInstance.remove).toHaveBeenCalledWith('test-app-session', undefined);
    });
  });

  describe('BSID management', () => {
    it('should get BSID from encrypted cookie', () => {
      const mockBsid = 'test-browser-session-id';
      mockCookieInstance.get.mockReturnValue(`encrypted-"${mockBsid}"`);
      
      const bsid = Cookies.bsid;
      
      expect(mockCookieInstance.get).toHaveBeenCalledWith('test-app-bsid', undefined);
      expect(decrypt).toHaveBeenCalledWith(`encrypted-"${mockBsid}"`, 'test-secret-key');
      expect(bsid).toBe(mockBsid);
    });

    it('should return null for empty BSID cookie', () => {
      mockCookieInstance.get.mockReturnValue(null);
      
      const bsid = Cookies.bsid;
      
      expect(bsid).toBeNull();
    });

    it('should set BSID with encryption', () => {
      const testBsid = 'new-browser-session-id';
      
      Cookies.bsid = testBsid;
      
      expect(encrypt).toHaveBeenCalledWith(testBsid, 'test-secret-key');
      expect(mockCookieInstance.set).toHaveBeenCalledWith(
        'test-app-bsid',
        `encrypted-"${testBsid}"`,
        undefined
      );
    });

    it('should remove BSID when setting empty value', () => {
      Cookies.bsid = null;
      
      expect(mockCookieInstance.remove).toHaveBeenCalledWith('test-app-bsid', undefined);
    });
  });

  describe('cookie name creation', () => {
    it('should create cookie name with prefix', () => {
      // This tests the internal createCookieName function indirectly
      mockCookieInstance.get.mockReturnValue(null);
      
      Cookies.session;
      
      expect(mockCookieInstance.get).toHaveBeenCalledWith('test-app-session', undefined);
    });

    it('should handle different cookie names', () => {
      mockCookieInstance.get.mockReturnValue(null);
      
      Cookies.bsid;
      
      expect(mockCookieInstance.get).toHaveBeenCalledWith('test-app-bsid', undefined);
    });
  });

  describe('session expiration', () => {
    it('should calculate correct expiration time for remember option', () => {
      const sessionData = { userId: 123 };
      const sessionObj = { session: sessionData, remember: true };
      
      Cookies.session = sessionObj;
      
      const expectedMaxAge = 7 * 24 * 60 * 60; // 7 days in seconds
      expect(mockCookieInstance.set).toHaveBeenCalledWith(
        'test-app-session',
        expect.any(String),
        { maxAge: expectedMaxAge }
      );
    });

    it('should not set maxAge when remember is false', () => {
      const sessionData = { userId: 123 };
      const sessionObj = { session: sessionData, remember: false };
      
      Cookies.session = sessionObj;
      
      expect(mockCookieInstance.set).toHaveBeenCalledWith(
        'test-app-session',
        expect.any(String),
        undefined
      );
    });
  });

  describe('error handling', () => {
    it('should handle decryption errors gracefully', () => {
      mockCookieInstance.get.mockReturnValue('invalid-encrypted-data');
      decrypt.mockImplementation(() => {
        throw new Error('Decryption failed');
      });
      
      expect(() => {
        Cookies.session;
      }).toThrow('Decryption failed');
    });

    it('should handle empty cookie values', () => {
      mockCookieInstance.get.mockReturnValue('');
      
      const session = Cookies.session;
      
      expect(session).toBeNull();
    });

    it('should handle undefined cookie values', () => {
      mockCookieInstance.get.mockReturnValue(undefined);
      
      const session = Cookies.session;
      
      expect(session).toBeNull();
    });
  });

  describe('complex session data', () => {
    it('should handle complex session objects', () => {
      const complexSession = {
        user: {
          id: 123,
          name: 'John Doe',
          email: 'john@example.com',
          preferences: {
            theme: 'dark',
            notifications: true
          }
        },
        permissions: ['read', 'write'],
        lastLogin: new Date().toISOString()
      };
      
      const sessionObj = { session: complexSession, remember: true };
      
      Cookies.session = sessionObj;
      
      expect(encrypt).toHaveBeenCalledWith(complexSession, 'test-secret-key');
      expect(mockCookieInstance.set).toHaveBeenCalledWith(
        'test-app-session',
        `encrypted-${JSON.stringify(complexSession)}`,
        { maxAge: 604800 }
      );
    });

    it('should retrieve complex session objects correctly', () => {
      const complexSession = {
        user: { id: 123, name: 'John Doe' },
        permissions: ['read', 'write']
      };
      
      mockCookieInstance.get.mockReturnValue(`encrypted-${JSON.stringify(complexSession)}`);
      
      const session = Cookies.session;
      
      expect(session).toEqual(complexSession);
    });
  });

  describe('concurrency', () => {
    it('should handle multiple simultaneous cookie operations', () => {
      const sessionData = { userId: 123 };
      const bsidData = 'test-bsid';
      
      // Set both cookies simultaneously
      Cookies.session = { session: sessionData, remember: true };
      Cookies.bsid = bsidData;
      
      expect(encrypt).toHaveBeenCalledWith(sessionData, 'test-secret-key');
      expect(encrypt).toHaveBeenCalledWith(bsidData, 'test-secret-key');
      expect(mockCookieInstance.set).toHaveBeenCalledTimes(2);
    });
  });
});