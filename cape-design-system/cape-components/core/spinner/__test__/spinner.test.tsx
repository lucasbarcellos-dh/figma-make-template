import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import type { SpinnerProps } from '../type';
import { Spinner } from '../spinner';

describe('Spinner Component', () => {
  it('renders without crashing', () => {
    render(<Spinner data-testid="test-spinner" />);
    const element = screen.getByTestId('test-spinner');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<Spinner data-testid="test-spinner" />);
    expect(screen.getByTestId('test-spinner').tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<Spinner className="custom-class" data-testid="test-spinner" />);
    const element = screen.getByTestId('test-spinner');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system props correctly', () => {
    render(
      <Spinner
        data-testid="test-spinner"
        style={{ margin: 10, width: '50%' }}
      />,
    );
    const element = screen.getByTestId('test-spinner');
    expect(element).toHaveStyle({
      margin: '10px',
      width: '50%',
    });
  });

  it('renders with role="status" by default, and can accept a custom role', () => {
    const { rerender } = render(<Spinner data-testid="test-spinner" />);
    expect(screen.getByRole('status')).toBeInTheDocument();

    rerender(<Spinner role="alert" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders with small size and branded variant by default', () => {
    render(<Spinner data-testid="test-spinner" />);

    const spinner = screen.getByTestId('test-spinner');
    expect(spinner.dataset.size).toBe('small');
    expect(spinner.dataset.variant).toBe('branded');
  });

  it.each(['xsmall', 'small', 'medium', 'large'])(
    'renders with size `%s`',
    (size) => {
      render(
        <Spinner
          data-testid="test-spinner"
          size={size as SpinnerProps['size']}
        />,
      );
      expect(screen.getByTestId('test-spinner').dataset.size).toBe(size);
    },
  );

  it.each(['branded', 'inverse'])('renders with variant `%s`', (variant) => {
    render(
      <Spinner
        data-testid="test-spinner"
        variant={variant as SpinnerProps['variant']}
      />,
    );
    expect(screen.getByTestId('test-spinner').dataset.variant).toBe(variant);
  });
});
