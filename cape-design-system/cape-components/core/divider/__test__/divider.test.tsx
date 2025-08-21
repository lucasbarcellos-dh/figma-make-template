import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Divider } from '../divider';

describe('Divider Component', () => {
  it('renders with default properties', () => {
    render(<Divider />);
    const element = screen.getByRole('separator');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('aria-orientation', 'horizontal');
    expect(element).toHaveAttribute('data-orientation', 'horizontal');
    expect(element).toHaveAttribute('data-size', 'small');
    expect(element).toHaveAttribute('data-variant', 'normal');
  });

  it('renders as hr tag', () => {
    render(<Divider />);
    const element = screen.getByRole('separator');
    expect(element.tagName).toBe('HR');
  });

  it('renders with custom class', () => {
    render(<Divider className="custom-class" />);
    const element = screen.getByRole('separator');
    expect(element).toHaveClass('custom-class');
  });

  it('should forward ref', () => {
    const ref = createRef<HTMLHRElement>();
    render(<Divider ref={ref} />);

    expect(ref.current).not.toBeNull();
    if (ref.current) {
      expect(ref.current.tagName).toBe('HR');
    }
  });

  it('applies the correct properties from useDivider hook', () => {
    render(<Divider orientation="vertical" size="medium" variant="dark" />);
    const button = screen.getByRole('separator');

    expect(button).toHaveAttribute('data-orientation', 'vertical');
    expect(button).toHaveAttribute('data-size', 'medium');
    expect(button).toHaveAttribute('data-variant', 'dark');
  });
});
