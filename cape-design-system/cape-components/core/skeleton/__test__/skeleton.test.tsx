import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Skeleton } from '../skeleton';

describe('Skeleton Component', () => {
  it('renders without crashing', () => {
    render(<Skeleton data-testid="skeleton" />);
    const element = screen.getByTestId('skeleton');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<Skeleton data-testid="skeleton" />);
    const element = screen.getByTestId('skeleton');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<Skeleton className="custom-class" data-testid="skeleton" />);
    const element = screen.getByTestId('skeleton');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system props correctly', () => {
    render(
      <Skeleton data-testid="skeleton" style={{ margin: 10, padding: 50 }} />,
    );
    const element = screen.getByTestId('skeleton');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });

  it('enables animation when rendered by default', () => {
    render(<Skeleton data-testid="skeleton" />);
    const element = screen.getByTestId('skeleton');
    expect(element.className).toMatch(/animated/);
  });

  it('disables animation when rendered with animated as false', () => {
    render(<Skeleton animated={false} data-testid="skeleton" />);
    const element = screen.getByTestId('skeleton');
    expect(element.className).not.toMatch(/animated/);
  });

  it('applies the correct variant attribute', () => {
    const variant = 'text';
    render(<Skeleton data-testid="skeleton" variant={variant} />);
    const element = screen.getByTestId('skeleton');
    expect(element).toHaveAttribute('data-variant', variant);
    expect(element).not.toHaveAttribute('data-variant', 'rounded');
  });
});
