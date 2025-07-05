import { renderHook, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import useQuery, { queryStringify } from '../useQuery';

// Mock react-router-dom
const mockNavigate = jest.fn();
const mockLocation = {
  pathname: '/test-path'
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
  useSearchParams: () => [new URLSearchParams('?page=1&limit=10&search=test')]
}));

describe('useQuery hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('queryStringify', () => {
    it('should stringify objects correctly', () => {
      const obj = { page: 1, limit: 10, search: 'test' };
      const result = queryStringify(obj);
      expect(result).toBe('page=1&limit=10&search=test');
    });

    it('should handle empty objects', () => {
      const result = queryStringify({});
      expect(result).toBe('');
    });

    it('should handle arrays', () => {
      const obj = { tags: ['tag1', 'tag2'] };
      const result = queryStringify(obj);
      expect(result).toBe('tags%5B0%5D=tag1&tags%5B1%5D=tag2');
    });

    it('should handle nested objects', () => {
      const obj = { user: { name: 'John', age: 30 } };
      const result = queryStringify(obj);
      expect(result).toBe('user%5Bname%5D=John&user%5Bage%5D=30');
    });
  });

  describe('useQuery hook functionality', () => {
    const wrapper = ({ children }) => (
      <BrowserRouter>{children}</BrowserRouter>
    );

    it('should parse query parameters correctly', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      expect(result.current.query).toEqual({
        page: '1',
        limit: '10',
        search: 'test'
      });
    });

    it('should build query URL correctly', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const newQuery = { page: 2, limit: 20 };
      const url = result.current.buildQueryURL(newQuery);
      
      expect(url).toBe('/test-path?page=2&limit=20');
    });

    it('should build query URL with current pathname', () => {
      mockLocation.pathname = '/products';
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const newQuery = { category: 'electronics' };
      const url = result.current.buildQueryURL(newQuery);
      
      expect(url).toBe('/products?category=electronics');
    });

    it('should clean deep empty values when building URL', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const newQuery = { 
        page: 1, 
        search: '', 
        filters: {
          category: 'test',
          price: null,
          rating: undefined
        }
      };
      const url = result.current.buildQueryURL(newQuery);
      
      // Should exclude empty/null/undefined values
      expect(url).toBe('/test-path?page=1&filters%5Bcategory%5D=test');
    });

    it('should push query and call navigate', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const newQuery = { page: 3 };
      
      act(() => {
        result.current.pushQuery(newQuery);
      });
      
      expect(mockNavigate).toHaveBeenCalledWith('/test-path?page=3');
    });

    it('should update query by merging with current query', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const newQuery = { page: 2 };
      
      act(() => {
        result.current.updateQuery(newQuery);
      });
      
      // Should merge with existing query (page=1&limit=10&search=test)
      expect(mockNavigate).toHaveBeenCalledWith('/test-path?page=2&limit=10&search=test');
    });

    it('should handle empty query updates', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      act(() => {
        result.current.updateQuery({});
      });
      
      // Should keep current query when updating with empty object
      expect(mockNavigate).toHaveBeenCalledWith('/test-path?page=1&limit=10&search=test');
    });

    it('should handle query parameter removal', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const newQuery = { page: 1, limit: 10, search: undefined };
      
      act(() => {
        result.current.updateQuery(newQuery);
      });
      
      // Should remove search parameter when set to undefined
      expect(mockNavigate).toHaveBeenCalledWith('/test-path?page=1&limit=10');
    });

    it('should handle complex query objects', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const complexQuery = {
        page: 1,
        filters: {
          category: 'electronics',
          price: { min: 100, max: 500 },
          tags: ['sale', 'new']
        },
        sort: 'price-asc'
      };
      
      act(() => {
        result.current.pushQuery(complexQuery);
      });
      
      expect(mockNavigate).toHaveBeenCalledWith(
        expect.stringContaining('/test-path?')
      );
      expect(mockNavigate).toHaveBeenCalledWith(
        expect.stringContaining('page=1')
      );
      expect(mockNavigate).toHaveBeenCalledWith(
        expect.stringContaining('sort=price-asc')
      );
    });
  });

  describe('edge cases', () => {
    const wrapper = ({ children }) => (
      <BrowserRouter>{children}</BrowserRouter>
    );

    it('should handle special characters in query values', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const query = { search: 'test & special chars!' };
      const url = result.current.buildQueryURL(query);
      
      expect(url).toContain('search=test%20%26%20special%20chars!');
    });

    it('should handle boolean values in query', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const query = { featured: true, sale: false };
      const url = result.current.buildQueryURL(query);
      
      expect(url).toContain('featured=true');
      expect(url).toContain('sale=false');
    });

    it('should handle numeric values in query', () => {
      const { result } = renderHook(() => useQuery(), { wrapper });
      
      const query = { page: 1, price: 99.99 };
      const url = result.current.buildQueryURL(query);
      
      expect(url).toContain('page=1');
      expect(url).toContain('price=99.99');
    });
  });
});