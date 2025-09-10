import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Backdrop } from '../backdrop';

describe('Backdrop Component', () => {
  it('renders with default properties', () => {
    render(<Backdrop data-testid="test-backdrop" />);
    const element = screen.getByTestId('test-backdrop');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with custom class', () => {
    render(<Backdrop className="custom-class" data-testid="test-backdrop" />);
    const element = screen.getByTestId('test-backdrop');
    expect(element).toHaveClass('custom-class');
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLHRElement>();
    render(<Backdrop ref={ref} />);

    expect(ref.current).not.toBeNull();
  });

  it('should apply the correct properties', () => {
    render(<Backdrop data-testid="test-backdrop" open zIndex={99} />);
    const element = screen.getByTestId('test-backdrop');

    expect(element).toHaveAttribute('data-open', 'true');
    expect(element).toHaveStyle('--cp-backdrop-z-index: 99');
  });

  it('should accept children', () => {
    render(
      <Backdrop>
        <div>Test Content</div>
      </Backdrop>,
    );
    const element = screen.getByText('Test Content');

    expect(element).toBeInTheDocument();
  });

  it('renders backdropContent directly when disablePortal is true', () => {
    render(
      <Backdrop disablePortal>
        <div>Test Content</div>
      </Backdrop>,
    );
    const backdropContent = screen.getByText('Test Content');

    expect(backdropContent).toBeInTheDocument();
  });
});
