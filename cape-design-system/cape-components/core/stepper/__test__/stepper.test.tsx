import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { createRef } from 'react';
import { Stepper } from '../stepper';

describe('<Stepper />', () => {
  it('renders without crashing', () => {
    render(<Stepper data-testid="stepper" />);

    const element = screen.getByTestId('stepper');
    expect(element).toBeInTheDocument();
  });

  it('renders as `ol` by default', () => {
    render(<Stepper data-testid="stepper" />);

    const element = screen.getByTestId('stepper');
    expect(element.tagName).toBe('OL');
  });

  it('renders with custom class', () => {
    render(<Stepper className="custom-class" data-testid="stepper" />);
    const element = screen.getByTestId('stepper');
    expect(element).toHaveClass('custom-class');
  });

  it('forwards the ref correctly', () => {
    const ref = createRef<HTMLOListElement>();
    render(<Stepper ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLOListElement);
  });
});
