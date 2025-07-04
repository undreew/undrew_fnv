import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock the dependencies
jest.mock('routes', () => [
  {
    path: '/',
    element: <div>Home Page</div>
  },
  {
    path: '/about',
    element: <div>About Page</div>
  }
]);

jest.mock('utils/render-routes', () => (routes) => 
  routes.map((route, index) => (
    <div key={index} data-testid={`route-${index}`}>
      {route.element}
    </div>
  ))
);

jest.mock('components/Page', () => ({
  Page: ({ children }) => <div data-testid="page-wrapper">{children}</div>
}));

jest.mock('AppProviders', () => ({ children }) => (
  <div data-testid="app-providers">{children}</div>
));

jest.mock('hooks/useBSID', () => ({
  __esModule: true,
  default: jest.fn()
}));

import useBSID from 'hooks/useBSID';

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading state when useBSID is loading', () => {
    useBSID.mockReturnValue({ isLoading: true, bsid: null });
    
    render(<App />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render app structure when not loading', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: 'test-bsid' });
    
    render(<App />);
    
    expect(screen.getByTestId('app-providers')).toBeInTheDocument();
    expect(screen.getByTestId('page-wrapper')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('should render routes when not loading', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: 'test-bsid' });
    
    render(<App />);
    
    expect(screen.getByTestId('route-0')).toBeInTheDocument();
    expect(screen.getByTestId('route-1')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });

  it('should use AppProviders wrapper', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: 'test-bsid' });
    
    render(<App />);
    
    const appProviders = screen.getByTestId('app-providers');
    expect(appProviders).toBeInTheDocument();
    
    // Check that Router is inside AppProviders
    expect(appProviders).toContainElement(screen.getByTestId('page-wrapper'));
  });

  it('should use Page wrapper component', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: 'test-bsid' });
    
    render(<App />);
    
    const pageWrapper = screen.getByTestId('page-wrapper');
    expect(pageWrapper).toBeInTheDocument();
    
    // Check that routes are inside Page wrapper
    expect(pageWrapper).toContainElement(screen.getByTestId('route-0'));
  });

  it('should handle loading state changes', async () => {
    // Start with loading
    useBSID.mockReturnValue({ isLoading: true, bsid: null });
    
    const { rerender } = render(<App />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Simulate loading completion
    useBSID.mockReturnValue({ isLoading: false, bsid: 'test-bsid' });
    
    rerender(<App />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(screen.getByTestId('app-providers')).toBeInTheDocument();
    });
  });

  it('should handle bsid being available', () => {
    const testBsid = 'test-browser-session-id';
    useBSID.mockReturnValue({ isLoading: false, bsid: testBsid });
    
    render(<App />);
    
    expect(screen.getByTestId('app-providers')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('should handle empty bsid', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: '' });
    
    render(<App />);
    
    expect(screen.getByTestId('app-providers')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('should handle null bsid when not loading', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: null });
    
    render(<App />);
    
    expect(screen.getByTestId('app-providers')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('should call useBSID hook', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: 'test-bsid' });
    
    render(<App />);
    
    expect(useBSID).toHaveBeenCalledTimes(1);
    expect(useBSID).toHaveBeenCalledWith();
  });

  it('should render loading text exactly as expected', () => {
    useBSID.mockReturnValue({ isLoading: true, bsid: null });
    
    render(<App />);
    
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    expect(loadingText.textContent).toBe('Loading...');
  });

  it('should not render any routes when loading', () => {
    useBSID.mockReturnValue({ isLoading: true, bsid: null });
    
    render(<App />);
    
    expect(screen.queryByTestId('route-0')).not.toBeInTheDocument();
    expect(screen.queryByTestId('route-1')).not.toBeInTheDocument();
    expect(screen.queryByText('Home Page')).not.toBeInTheDocument();
    expect(screen.queryByText('About Page')).not.toBeInTheDocument();
  });

  it('should not render AppProviders when loading', () => {
    useBSID.mockReturnValue({ isLoading: true, bsid: null });
    
    render(<App />);
    
    expect(screen.queryByTestId('app-providers')).not.toBeInTheDocument();
    expect(screen.queryByTestId('page-wrapper')).not.toBeInTheDocument();
  });

  it('should handle multiple re-renders correctly', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: 'test-bsid' });
    
    const { rerender } = render(<App />);
    
    expect(screen.getByTestId('app-providers')).toBeInTheDocument();
    
    // Re-render multiple times
    rerender(<App />);
    rerender(<App />);
    rerender(<App />);
    
    expect(screen.getByTestId('app-providers')).toBeInTheDocument();
    expect(useBSID).toHaveBeenCalledTimes(4); // Original + 3 re-renders
  });

  it('should maintain proper component hierarchy', () => {
    useBSID.mockReturnValue({ isLoading: false, bsid: 'test-bsid' });
    
    render(<App />);
    
    const appProviders = screen.getByTestId('app-providers');
    const pageWrapper = screen.getByTestId('page-wrapper');
    const route0 = screen.getByTestId('route-0');
    
    expect(appProviders).toContainElement(pageWrapper);
    expect(pageWrapper).toContainElement(route0);
  });
});
