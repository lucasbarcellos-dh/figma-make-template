import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { QuantitySelector } from '../quantity-selector';

describe('QuantitySelector Component', () => {
  it('renders without crashing', () => {
    render(<QuantitySelector data-testid="quantity-selector" />);
    const element = screen.getByTestId('quantity-selector');

    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<QuantitySelector data-testid="quantity-selector" />);
    const element = screen.getByTestId('quantity-selector');

    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <QuantitySelector
        className="custom-class"
        data-testid="quantity-selector"
      />,
    );
    const element = screen.getByTestId('quantity-selector');

    expect(element).toHaveClass('custom-class');
  });

  it('renders children', () => {
    render(
      <QuantitySelector>
        <div>+</div>
        <div>value</div>
        <div>-</div>
      </QuantitySelector>,
    );
    const incrementElement = screen.getByText('+');
    const decrementElement = screen.getByText('-');
    const valueElement = screen.getByText('value');

    expect(incrementElement).toBeInTheDocument();
    expect(decrementElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  it('only renders the increment button when there are no children', () => {
    render(<QuantitySelector />);
    const incrementButton = screen.getByLabelText('Increment Icon');
    const decrementButton = screen.queryByLabelText('Decrement Icon');

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).not.toBeInTheDocument();
  });

  it('renders a delete button when the value is equal to min + 1', () => {
    render(<QuantitySelector value={1} />);
    const deleteButton = screen.getByLabelText('Delete Icon');

    expect(deleteButton).toBeInTheDocument();
  });

  it('renders the default decrement button when the value is greater than min + 1', () => {
    render(<QuantitySelector value={2} />);
    const decrementButton = screen.getByLabelText('Decrement Icon');

    expect(decrementButton).toBeInTheDocument();
  });
});
