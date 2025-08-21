import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { createRef } from 'react';
import { Step } from '../step';

describe('<Step />', () => {
  it('renders without crashing', () => {
    render(<Step>Label of the stepper.</Step>);

    expect(screen.getByText('Label of the stepper.')).toBeInTheDocument();
  });

  it('renders as list element', () => {
    render(<Step data-testid="step">Label of the stepper.</Step>);

    const stepper = screen.getByTestId('step');
    expect(stepper).toBeInTheDocument();
    expect(stepper.tagName).toBe('LI');
  });

  it('forwards the ref correctly', () => {
    const ref = createRef<HTMLLIElement>();
    render(<Step ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLLIElement);
  });

  it('renders with custom class', () => {
    render(<Step className="custom-class" data-testid="step" />);

    expect(screen.getByTestId('step')).toHaveClass('custom-class');
  });
});
