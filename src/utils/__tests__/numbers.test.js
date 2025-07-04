import { getFormattedNumber, getFormattedPrice } from '../numbers';

describe('numbers utility functions', () => {
  describe('getFormattedNumber', () => {
    it('should format numbers with default comma separator', () => {
      expect(getFormattedNumber(3500)).toBe('3,500');
      expect(getFormattedNumber(1000)).toBe('1,000');
      expect(getFormattedNumber(1000000)).toBe('1,000,000');
    });

    it('should format numbers with custom formatter', () => {
      expect(getFormattedNumber(3500.50, '0,0.00')).toBe('3,500.50');
      expect(getFormattedNumber(1000.123, '0,0.0')).toBe('1,000.1');
      expect(getFormattedNumber(99.99, '0.00')).toBe('99.99');
    });

    it('should handle zero values', () => {
      expect(getFormattedNumber(0)).toBe('0');
      expect(getFormattedNumber(0, '0,0.00')).toBe('0.00');
    });

    it('should handle decimal values', () => {
      expect(getFormattedNumber(123.456)).toBe('123');
      expect(getFormattedNumber(123.456, '0,0.00')).toBe('123.46');
    });

    it('should handle negative numbers', () => {
      expect(getFormattedNumber(-1500)).toBe('-1,500');
      expect(getFormattedNumber(-1500.50, '0,0.00')).toBe('-1,500.50');
    });
  });

  describe('getFormattedPrice', () => {
    it('should format price with USD currency', () => {
      expect(getFormattedPrice(100, 'usd')).toBe('$100.00');
      expect(getFormattedPrice(1500.50, 'usd')).toBe('$1,500.50');
    });

    it('should format price with PHP currency', () => {
      expect(getFormattedPrice(100, 'php')).toBe('₱100.00');
      expect(getFormattedPrice(1500.50, 'php')).toBe('₱1,500.50');
    });

    it('should handle uppercase currency codes', () => {
      expect(getFormattedPrice(100, 'USD')).toBe('$100.00');
      expect(getFormattedPrice(100, 'PHP')).toBe('₱100.00');
    });

    it('should use custom currency labels', () => {
      const customCurrency = { eur: '€' };
      expect(getFormattedPrice(100, 'eur', customCurrency)).toBe('€100.00');
    });

    it('should use custom format', () => {
      expect(getFormattedPrice(100, 'usd', undefined, '0,0')).toBe('$100');
      expect(getFormattedPrice(1500.999, 'usd', undefined, '0,0.000')).toBe('$1,500.999');
    });

    it('should handle zero values', () => {
      expect(getFormattedPrice(0, 'usd')).toBe('$0.00');
      expect(getFormattedPrice(0, 'php')).toBe('₱0.00');
    });

    it('should handle large numbers', () => {
      expect(getFormattedPrice(1000000, 'usd')).toBe('$1,000,000.00');
      expect(getFormattedPrice(999999.99, 'php')).toBe('₱999,999.99');
    });

    it('should handle undefined currency gracefully', () => {
      // This should not throw an error but may return undefined symbol
      const result = getFormattedPrice(100, 'unknown');
      expect(result).toContain('100.00');
    });
  });
});