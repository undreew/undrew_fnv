# Unit Testing Documentation

## Overview

This project includes comprehensive unit testing for React components, utility functions, and custom hooks. The testing setup uses Jest and React Testing Library to ensure code quality and reliability.

## Testing Stack

- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **@testing-library/jest-dom**: Custom Jest matchers for DOM elements
- **@testing-library/user-event**: User interaction simulation

## Test Structure

The tests are organized in the following structure:

```
src/
├── components/
│   ├── Buttons/
│   │   └── __tests__/
│   │       └── ButtonIcon.test.js
│   └── Input/
│       └── __tests__/
│           └── InputPassword.test.js
├── hooks/
│   └── __tests__/
│       ├── useQuery.test.js
│       └── useBSID.test.js
├── utils/
│   └── __tests__/
│       ├── numbers.test.js
│       ├── encrypts.test.js
│       └── cookies.test.js
├── App.test.js
└── setupTests.js
```

## Test Coverage

### Utility Functions
- **numbers.js**: Number formatting and currency formatting functions
- **encrypts.js**: Encryption/decryption functions using CryptoJS
- **cookies.js**: Cookie management with encryption for session and BSID

### Custom Hooks
- **useQuery.js**: URL query parameter management hook
- **useBSID.js**: Browser session ID management hook

### React Components
- **ButtonIcon.js**: Icon button component with Chakra UI integration
- **InputPassword.js**: Password input with visibility toggle functionality

### Main App Component
- **App.js**: Main application component with routing and providers

## Running Tests

### Available Test Commands

```bash
# Run tests in watch mode (default)
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests with coverage in watch mode
npm run test:coverage:watch

# Run tests for CI/CD (no watch mode)
npm run test:ci

# Run tests in debug mode
npm run test:debug

# Update test snapshots
npm run test:update
```

### Test Coverage Goals

The project maintains the following coverage thresholds:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## Test Configuration

### Jest Configuration

The Jest configuration is set up in `package.json` with the following key settings:

```json
{
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/reportWebVitals.js",
    "!src/**/*.test.{js,jsx}",
    "!src/**/__tests__/**",
    "!src/assets/**",
    "!src/styles/**"
  ],
  "coverageReporters": ["text", "lcov", "html"],
  "coverageDirectory": "coverage"
}
```

### Setup Files

- `src/setupTests.js`: Global test setup including jest-dom matchers

## Testing Patterns

### Component Testing
- Render components with necessary providers (ChakraProvider for UI components)
- Test user interactions (clicks, form inputs, keyboard events)
- Verify accessibility attributes and ARIA compliance
- Test component props and state management

### Hook Testing
- Use `renderHook` from React Testing Library
- Mock dependencies and external services
- Test async operations and state changes
- Verify hook return values and side effects

### Utility Function Testing
- Test pure functions with various input scenarios
- Include edge cases and error handling
- Test integration between related functions
- Verify data transformations and validations

## Mocking Strategy

### Common Mocks
- **React Router**: Navigation and routing functions
- **Universal Cookie**: Cookie management library
- **Crypto-JS**: Encryption/decryption functions
- **External APIs**: HTTP requests using axios

### Mock Examples

```javascript
// Mocking React Router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
  useSearchParams: () => [new URLSearchParams('?page=1')]
}));

// Mocking utility functions
jest.mock('utils/cookies', () => ({
  bsid: null
}));
```

## Best Practices

### Test Structure
1. **Arrange**: Set up test data and mocks
2. **Act**: Execute the code being tested
3. **Assert**: Verify the expected outcomes

### Naming Conventions
- Use descriptive test names that explain what is being tested
- Group related tests using `describe` blocks
- Use `it` or `test` for individual test cases

### Test Data
- Use meaningful test data that reflects real-world scenarios
- Create reusable test utilities and helper functions
- Avoid hardcoded values when possible

### Assertions
- Test behavior, not implementation details
- Use appropriate matchers for better error messages
- Test both positive and negative cases

## Continuous Integration

The tests are configured to run in CI/CD environments with:
- Coverage reporting in multiple formats (text, lcov, html)
- Non-interactive mode for automated testing
- Coverage thresholds enforcement

## Common Test Scenarios

### Component Rendering
```javascript
it('should render with correct props', () => {
  render(<Component prop="value" />);
  expect(screen.getByText('Expected Text')).toBeInTheDocument();
});
```

### User Interactions
```javascript
it('should handle click events', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} />);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Async Operations
```javascript
it('should handle async data loading', async () => {
  render(<AsyncComponent />);
  await waitFor(() => {
    expect(screen.getByText('Loaded Data')).toBeInTheDocument();
  });
});
```

### Error Handling
```javascript
it('should handle errors gracefully', () => {
  mockFunction.mockRejectedValue(new Error('Test error'));
  expect(() => {
    functionUnderTest();
  }).toThrow('Test error');
});
```

## Troubleshooting

### Common Issues

1. **Module not found errors**: Ensure all dependencies are properly mocked
2. **Async timing issues**: Use `waitFor` or `act` for async operations
3. **DOM cleanup warnings**: Ensure proper cleanup in `beforeEach/afterEach`
4. **Mock not working**: Check mock placement and implementation

### Debug Tips
- Use `screen.debug()` to inspect DOM during tests
- Add `console.log` statements to understand test flow
- Use `test.only()` to run specific tests
- Check test coverage reports for missed cases

## Contributing

When adding new features:
1. Write tests for new components, hooks, and utilities
2. Maintain or improve coverage percentages
3. Follow existing testing patterns and conventions
4. Update this documentation as needed

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Chakra UI Testing](https://chakra-ui.com/docs/styled-system/testing)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)