import { renderHook, waitFor } from '@testing-library/react';
import useBSID from '../useBSID';

// Mock dependencies
jest.mock('utils/cookies', () => ({
  bsid: null
}));

jest.mock('utils/fingerprint', () => 
  jest.fn(() => Promise.resolve('mock-fingerprint-id'))
);

import Cookies from 'utils/cookies';
import loadFingerprint from 'utils/fingerprint';

describe('useBSID hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset cookies mock
    Cookies.bsid = null;
  });

  it('should return loading state when bsid is not available', () => {
    const { result } = renderHook(() => useBSID());
    
    expect(result.current.isLoading).toBe(true);
    expect(result.current.bsid).toBe(null);
  });

  it('should return existing bsid from cookies when available', () => {
    // Mock existing bsid in cookies
    Cookies.bsid = 'existing-bsid';
    
    const { result } = renderHook(() => useBSID());
    
    expect(result.current.isLoading).toBe(false);
    expect(result.current.bsid).toBe('existing-bsid');
  });

  it('should load fingerprint when bsid is not available', async () => {
    const { result } = renderHook(() => useBSID());
    
    // Initially loading
    expect(result.current.isLoading).toBe(true);
    expect(result.current.bsid).toBe(null);
    
    // Wait for fingerprint to load
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.bsid).toBe('mock-fingerprint-id');
    });
    
    // Check that fingerprint was called
    expect(loadFingerprint).toHaveBeenCalledTimes(1);
    
    // Check that bsid was set in cookies
    expect(Cookies.bsid).toBe('mock-fingerprint-id');
  });

  it('should not load fingerprint when bsid already exists', () => {
    // Mock existing bsid in cookies
    Cookies.bsid = 'existing-bsid';
    
    renderHook(() => useBSID());
    
    // Fingerprint should not be called
    expect(loadFingerprint).not.toHaveBeenCalled();
  });

  it('should handle fingerprint loading errors gracefully', async () => {
    // Mock fingerprint to reject
    loadFingerprint.mockRejectedValueOnce(new Error('Fingerprint failed'));
    
    const { result } = renderHook(() => useBSID());
    
    // Initially loading
    expect(result.current.isLoading).toBe(true);
    
    // Wait for potential state change
    await waitFor(() => {
      // The hook should still be loading or handle the error
      expect(loadFingerprint).toHaveBeenCalledTimes(1);
    });
  });

  it('should update state when fingerprint resolves', async () => {
    const mockFingerprint = 'test-fingerprint-123';
    loadFingerprint.mockResolvedValueOnce(mockFingerprint);
    
    const { result } = renderHook(() => useBSID());
    
    // Wait for the async operation to complete
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.bsid).toBe(mockFingerprint);
    });
    
    // Verify cookies were updated
    expect(Cookies.bsid).toBe(mockFingerprint);
  });

  it('should handle multiple hook instances consistently', async () => {
    const { result: result1 } = renderHook(() => useBSID());
    const { result: result2 } = renderHook(() => useBSID());
    
    // Both should start loading
    expect(result1.current.isLoading).toBe(true);
    expect(result2.current.isLoading).toBe(true);
    
    // Wait for both to finish
    await waitFor(() => {
      expect(result1.current.isLoading).toBe(false);
      expect(result2.current.isLoading).toBe(false);
    });
    
    // Both should have the same bsid
    expect(result1.current.bsid).toBe(result2.current.bsid);
  });

  it('should not call fingerprint multiple times for same hook instance', async () => {
    const { result, rerender } = renderHook(() => useBSID());
    
    // Wait for initial load
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    // Rerender the hook
    rerender();
    
    // Should not call fingerprint again
    expect(loadFingerprint).toHaveBeenCalledTimes(1);
  });

  it('should handle cookie value changes', async () => {
    // Start with no bsid
    const { result } = renderHook(() => useBSID());
    
    // Wait for fingerprint to load
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    const firstBsid = result.current.bsid;
    expect(firstBsid).toBeTruthy();
    
    // Simulate cookie being cleared and hook re-initialized
    Cookies.bsid = null;
    loadFingerprint.mockResolvedValueOnce('new-fingerprint-id');
    
    const { result: newResult } = renderHook(() => useBSID());
    
    // Should load new fingerprint
    await waitFor(() => {
      expect(newResult.current.isLoading).toBe(false);
      expect(newResult.current.bsid).toBe('new-fingerprint-id');
    });
  });

  it('should return consistent interface', () => {
    const { result } = renderHook(() => useBSID());
    
    // Check that the hook returns the expected interface
    expect(result.current).toHaveProperty('isLoading');
    expect(result.current).toHaveProperty('bsid');
    expect(typeof result.current.isLoading).toBe('boolean');
    expect(result.current.bsid === null || typeof result.current.bsid === 'string').toBe(true);
  });
});