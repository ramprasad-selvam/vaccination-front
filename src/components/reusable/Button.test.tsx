import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Givenw Button Component', () => {
  it('renders button with text', () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders button with correct type', () => {
    render(<Button text="Submit" type="submit" />);
    const buttonElement = screen.getByText(/submit/i);
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  it('button is disabled when disabled prop is true', () => {
    render(<Button text="Disabled" disabled={true} />);
    const buttonElement = screen.getByText(/disabled/i);
    expect(buttonElement).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  })
});

