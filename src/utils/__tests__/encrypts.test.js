import { encrypt, decrypt } from '../encrypts';
import CryptoJS from 'crypto-js';

describe('encrypts utility functions', () => {
  const testSecret = 'test-secret-key';
  const testValue = { name: 'John', age: 30 };
  const testString = 'Hello World';
  const testArray = [1, 2, 3, 'test'];
  const testNumber = 42;

  describe('encrypt', () => {
    it('should encrypt an object', () => {
      const encrypted = encrypt(testValue, testSecret);
      expect(encrypted).toBeDefined();
      expect(typeof encrypted.toString()).toBe('string');
      expect(encrypted.toString()).not.toBe(JSON.stringify(testValue));
    });

    it('should encrypt a string', () => {
      const encrypted = encrypt(testString, testSecret);
      expect(encrypted).toBeDefined();
      expect(typeof encrypted.toString()).toBe('string');
      expect(encrypted.toString()).not.toBe(testString);
    });

    it('should encrypt an array', () => {
      const encrypted = encrypt(testArray, testSecret);
      expect(encrypted).toBeDefined();
      expect(typeof encrypted.toString()).toBe('string');
      expect(encrypted.toString()).not.toBe(JSON.stringify(testArray));
    });

    it('should encrypt a number', () => {
      const encrypted = encrypt(testNumber, testSecret);
      expect(encrypted).toBeDefined();
      expect(typeof encrypted.toString()).toBe('string');
      expect(encrypted.toString()).not.toBe(testNumber.toString());
    });

    it('should produce different results for different secrets', () => {
      const encrypted1 = encrypt(testValue, 'secret1');
      const encrypted2 = encrypt(testValue, 'secret2');
      expect(encrypted1.toString()).not.toBe(encrypted2.toString());
    });

    it('should produce different results for different values with same secret', () => {
      const encrypted1 = encrypt(testValue, testSecret);
      const encrypted2 = encrypt(testString, testSecret);
      expect(encrypted1.toString()).not.toBe(encrypted2.toString());
    });
  });

  describe('decrypt', () => {
    it('should decrypt an object correctly', () => {
      const encrypted = encrypt(testValue, testSecret);
      const decrypted = decrypt(encrypted, testSecret);
      expect(decrypted).toEqual(testValue);
    });

    it('should decrypt a string correctly', () => {
      const encrypted = encrypt(testString, testSecret);
      const decrypted = decrypt(encrypted, testSecret);
      expect(decrypted).toBe(testString);
    });

    it('should decrypt an array correctly', () => {
      const encrypted = encrypt(testArray, testSecret);
      const decrypted = decrypt(encrypted, testSecret);
      expect(decrypted).toEqual(testArray);
    });

    it('should decrypt a number correctly', () => {
      const encrypted = encrypt(testNumber, testSecret);
      const decrypted = decrypt(encrypted, testSecret);
      expect(decrypted).toBe(testNumber);
    });

    it('should handle null values', () => {
      const encrypted = encrypt(null, testSecret);
      const decrypted = decrypt(encrypted, testSecret);
      expect(decrypted).toBeNull();
    });

    it('should handle boolean values', () => {
      const encrypted = encrypt(true, testSecret);
      const decrypted = decrypt(encrypted, testSecret);
      expect(decrypted).toBe(true);
    });

    it('should throw error with wrong secret', () => {
      const encrypted = encrypt(testValue, testSecret);
      expect(() => {
        decrypt(encrypted, 'wrong-secret');
      }).toThrow();
    });

    it('should throw error with invalid encrypted data', () => {
      expect(() => {
        decrypt('invalid-encrypted-data', testSecret);
      }).toThrow();
    });
  });

  describe('encrypt and decrypt integration', () => {
    it('should maintain data integrity through encrypt/decrypt cycle', () => {
      const complexObject = {
        user: {
          id: 123,
          name: 'John Doe',
          email: 'john@example.com',
          preferences: {
            theme: 'dark',
            notifications: true
          }
        },
        data: [1, 2, 3, 'test', null, true, false],
        timestamp: new Date().toISOString()
      };

      const encrypted = encrypt(complexObject, testSecret);
      const decrypted = decrypt(encrypted, testSecret);
      
      expect(decrypted).toEqual(complexObject);
    });

    it('should handle empty objects and arrays', () => {
      const emptyObj = {};
      const emptyArr = [];
      
      const encryptedObj = encrypt(emptyObj, testSecret);
      const encryptedArr = encrypt(emptyArr, testSecret);
      
      const decryptedObj = decrypt(encryptedObj, testSecret);
      const decryptedArr = decrypt(encryptedArr, testSecret);
      
      expect(decryptedObj).toEqual(emptyObj);
      expect(decryptedArr).toEqual(emptyArr);
    });
  });
});