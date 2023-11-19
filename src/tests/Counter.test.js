import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  // Test if the Counter component renders with the correct message
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Test if the initial count is 0
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Test if clicking the '+' button increments the count
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Test if clicking the '-' button decrements the count
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('-1');
});

