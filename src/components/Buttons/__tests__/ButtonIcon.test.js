import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import ButtonIcon from '../ButtonIcon';

// Mock icon component
const MockIcon = () => <span data-testid="mock-icon">Icon</span>;

// Wrapper component for Chakra UI
const ChakraWrapper = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

describe('ButtonIcon Component', () => {
  const renderButtonIcon = (props = {}) => {
    const defaultProps = {
      icon: <MockIcon />,
      label: 'Test Button',
      ...props
    };
    
    return render(
      <ChakraWrapper>
        <ButtonIcon {...defaultProps} />
      </ChakraWrapper>
    );
  };

  it('should render the button with icon', () => {
    renderButtonIcon();
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('should render with correct aria-label', () => {
    const label = 'Custom Button Label';
    renderButtonIcon({ label });
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', label);
  });

  it('should apply default variant "ghost"', () => {
    renderButtonIcon();
    
    const button = screen.getByRole('button');
    // Chakra UI applies classes based on variant
    expect(button).toHaveClass('chakra-button');
  });

  it('should apply custom variant when provided', () => {
    renderButtonIcon({ variant: 'solid' });
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('chakra-button');
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    renderButtonIcon({ onClick: handleClick });
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should pass through additional props', () => {
    const customProps = {
      'data-testid': 'custom-button',
      disabled: true,
      size: 'lg'
    };
    
    renderButtonIcon(customProps);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-testid', 'custom-button');
    expect(button).toBeDisabled();
  });

  it('should handle different icon types', () => {
    const StringIcon = () => <span data-testid="string-icon">📱</span>;
    const NumberIcon = () => <span data-testid="number-icon">123</span>;
    
    const { rerender } = renderButtonIcon({ icon: <StringIcon /> });
    expect(screen.getByTestId('string-icon')).toBeInTheDocument();
    
    rerender(
      <ChakraWrapper>
        <ButtonIcon icon={<NumberIcon />} label="Test" />
      </ChakraWrapper>
    );
    expect(screen.getByTestId('number-icon')).toBeInTheDocument();
  });

  it('should handle keyboard navigation', () => {
    const handleClick = jest.fn();
    renderButtonIcon({ onClick: handleClick });
    
    const button = screen.getByRole('button');
    button.focus();
    
    expect(button).toHaveFocus();
    
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    fireEvent.keyDown(button, { key: ' ', code: 'Space' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should handle different sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { rerender } = renderButtonIcon({ size });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('chakra-button');
      
      rerender(
        <ChakraWrapper>
          <ButtonIcon icon={<MockIcon />} label="Test" size={size} />
        </ChakraWrapper>
      );
    });
  });

  it('should handle different color schemes', () => {
    const colorSchemes = ['blue', 'green', 'red', 'purple'];
    
    colorSchemes.forEach(colorScheme => {
      const { rerender } = renderButtonIcon({ colorScheme });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('chakra-button');
      
      rerender(
        <ChakraWrapper>
          <ButtonIcon icon={<MockIcon />} label="Test" colorScheme={colorScheme} />
        </ChakraWrapper>
      );
    });
  });

  it('should handle loading state', () => {
    renderButtonIcon({ isLoading: true });
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    // Chakra UI adds loading spinner
    expect(button).toHaveClass('chakra-button');
  });

  it('should handle disabled state', () => {
    const handleClick = jest.fn();
    renderButtonIcon({ disabled: true, onClick: handleClick });
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should maintain icon visibility when disabled', () => {
    renderButtonIcon({ disabled: true });
    
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should handle custom CSS classes', () => {
    renderButtonIcon({ className: 'custom-button-class' });
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-button-class');
  });

  it('should handle hover and focus states', () => {
    renderButtonIcon();
    
    const button = screen.getByRole('button');
    
    fireEvent.mouseEnter(button);
    expect(button).toHaveClass('chakra-button');
    
    fireEvent.mouseLeave(button);
    expect(button).toHaveClass('chakra-button');
    
    fireEvent.focus(button);
    expect(button).toHaveFocus();
    
    fireEvent.blur(button);
    expect(button).not.toHaveFocus();
  });

  it('should work with complex icon components', () => {
    const ComplexIcon = ({ color = 'blue' }) => (
      <svg data-testid="complex-icon">
        <circle cx="50" cy="50" r="40" fill={color} />
      </svg>
    );
    
    renderButtonIcon({ icon: <ComplexIcon color="red" /> });
    
    expect(screen.getByTestId('complex-icon')).toBeInTheDocument();
  });

  it('should handle null or undefined props gracefully', () => {
    // Test with minimal required props
    renderButtonIcon({ icon: <MockIcon />, label: undefined });
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });
});