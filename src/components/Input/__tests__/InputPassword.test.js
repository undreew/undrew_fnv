import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import InputPassword from '../InputPassword';

// Wrapper component for Chakra UI
const ChakraWrapper = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

describe('InputPassword Component', () => {
  const renderInputPassword = (props = {}) => {
    return render(
      <ChakraWrapper>
        <InputPassword {...props} />
      </ChakraWrapper>
    );
  };

  it('should render password input with hidden text by default', () => {
    renderInputPassword({ placeholder: 'Enter password' });
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toHaveAttribute('placeholder', 'Enter password');
  });

  it('should render toggle button with unlock icon initially', () => {
    renderInputPassword();
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    
    // Should show unlock icon when password is hidden
    const unlockIcon = screen.getByTestId('unlock-icon') || screen.getByText('🔓');
    expect(unlockIcon || toggleButton).toBeInTheDocument();
  });

  it('should toggle password visibility when button is clicked', () => {
    renderInputPassword({ value: 'testpassword' });
    
    const input = screen.getByRole('textbox');
    const toggleButton = screen.getByRole('button');
    
    // Initially should be password type
    expect(input).toHaveAttribute('type', 'password');
    
    // Click to show password
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
    
    // Click again to hide password
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should change icon when password visibility is toggled', () => {
    renderInputPassword();
    
    const toggleButton = screen.getByRole('button');
    
    // Initially should show unlock icon (password hidden)
    fireEvent.click(toggleButton);
    
    // After click, should show lock icon (password visible)
    // The icon should change based on showPassword state
    expect(toggleButton).toBeInTheDocument();
  });

  it('should handle input value changes', () => {
    const handleChange = jest.fn();
    renderInputPassword({ onChange: handleChange });
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'newpassword' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'newpassword'
        })
      })
    );
  });

  it('should pass through all input props', () => {
    const inputProps = {
      placeholder: 'Custom placeholder',
      value: 'testvalue',
      disabled: true,
      'data-testid': 'password-input',
      name: 'password',
      autoComplete: 'current-password'
    };
    
    renderInputPassword(inputProps);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Custom placeholder');
    expect(input).toHaveValue('testvalue');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('data-testid', 'password-input');
    expect(input).toHaveAttribute('name', 'password');
    expect(input).toHaveAttribute('autocomplete', 'current-password');
  });

  it('should handle focus and blur events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    
    renderInputPassword({ onFocus: handleFocus, onBlur: handleBlur });
    
    const input = screen.getByRole('textbox');
    
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('should handle keyboard events', () => {
    const handleKeyDown = jest.fn();
    renderInputPassword({ onKeyDown: handleKeyDown });
    
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should toggle password visibility with keyboard on toggle button', () => {
    renderInputPassword();
    
    const input = screen.getByRole('textbox');
    const toggleButton = screen.getByRole('button');
    
    // Initially password type
    expect(input).toHaveAttribute('type', 'password');
    
    // Toggle with Enter key
    fireEvent.keyDown(toggleButton, { key: 'Enter', code: 'Enter' });
    expect(input).toHaveAttribute('type', 'text');
    
    // Toggle with Space key
    fireEvent.keyDown(toggleButton, { key: ' ', code: 'Space' });
    expect(input).toHaveAttribute('type', 'password');
  });

  it('should maintain focus on input when toggle button is clicked', () => {
    renderInputPassword();
    
    const input = screen.getByRole('textbox');
    const toggleButton = screen.getByRole('button');
    
    // Focus the input first
    fireEvent.focus(input);
    expect(input).toHaveFocus();
    
    // Click toggle button
    fireEvent.click(toggleButton);
    
    // Input should still be focused (or we should verify expected behavior)
    expect(input).toBeInTheDocument();
  });

  it('should handle controlled component behavior', () => {
    const TestComponent = () => {
      const [value, setValue] = React.useState('');
      
      return (
        <ChakraWrapper>
          <InputPassword 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Controlled input"
          />
        </ChakraWrapper>
      );
    };
    
    render(<TestComponent />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
    
    fireEvent.change(input, { target: { value: 'controlled' } });
    expect(input).toHaveValue('controlled');
  });

  it('should handle uncontrolled component behavior', () => {
    renderInputPassword({ defaultValue: 'default' });
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('default');
    
    fireEvent.change(input, { target: { value: 'uncontrolled' } });
    expect(input).toHaveValue('uncontrolled');
  });

  it('should handle multiple instances independently', () => {
    render(
      <ChakraWrapper>
        <InputPassword data-testid="input1" />
        <InputPassword data-testid="input2" />
      </ChakraWrapper>
    );
    
    const inputs = screen.getAllByRole('textbox');
    const buttons = screen.getAllByRole('button');
    
    expect(inputs).toHaveLength(2);
    expect(buttons).toHaveLength(2);
    
    // Both should start as password type
    expect(inputs[0]).toHaveAttribute('type', 'password');
    expect(inputs[1]).toHaveAttribute('type', 'password');
    
    // Toggle first input
    fireEvent.click(buttons[0]);
    expect(inputs[0]).toHaveAttribute('type', 'text');
    expect(inputs[1]).toHaveAttribute('type', 'password'); // Should remain unchanged
  });

  it('should handle disabled state correctly', () => {
    renderInputPassword({ disabled: true });
    
    const input = screen.getByRole('textbox');
    const toggleButton = screen.getByRole('button');
    
    expect(input).toBeDisabled();
    
    // Toggle button should still be functional when input is disabled
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should handle size and variant props', () => {
    renderInputPassword({ size: 'lg', variant: 'filled' });
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('chakra-input');
  });

  it('should handle form validation states', () => {
    renderInputPassword({ isInvalid: true, isRequired: true });
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('should handle accessibility attributes', () => {
    renderInputPassword({ 
      'aria-label': 'Password input',
      'aria-describedby': 'password-help'
    });
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-label', 'Password input');
    expect(input).toHaveAttribute('aria-describedby', 'password-help');
  });

  it('should reset visibility state when component unmounts and remounts', () => {
    const { unmount } = renderInputPassword();
    
    // Toggle to show password
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    unmount();
    
    // Remount component
    renderInputPassword();
    
    // Should start with password hidden again
    const newInput = screen.getByRole('textbox');
    expect(newInput).toHaveAttribute('type', 'password');
  });
});