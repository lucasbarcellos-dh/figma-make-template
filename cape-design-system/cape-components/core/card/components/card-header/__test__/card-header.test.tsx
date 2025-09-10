import { useRef } from 'react';
import { render, screen, renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { CardHeader } from '../card-header';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<CardHeader>Test Card Header</CardHeader>);
    const element = screen.getByText('Test Card Header');
    expect(element).toBeInTheDocument();
  });

  it('should forward the ref', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    render(<CardHeader ref={result.current} />);
    expect(result.current.current).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<CardHeader>Test Card Header</CardHeader>);
    expect(screen.getByText('Test Card Header').tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<CardHeader className="custom-class">Test Card Header</CardHeader>);
    const element = screen.getByText('Test Card Header');
    expect(element).toHaveClass('custom-class');
  });
});
