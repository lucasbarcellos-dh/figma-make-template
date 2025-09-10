import { useRef } from 'react';
import { render, screen, renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { CardFooter } from '../card-footer';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<CardFooter>Test Card Footer</CardFooter>);
    const element = screen.getByText('Test Card Footer');
    expect(element).toBeInTheDocument();
  });

  it('should forward the ref', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    render(<CardFooter ref={result.current} />);
    expect(result.current.current).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<CardFooter>Test Card Footer</CardFooter>);
    expect(screen.getByText('Test Card Footer').tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<CardFooter className="custom-class">Test Card Footer</CardFooter>);
    const element = screen.getByText('Test Card Footer');
    expect(element).toHaveClass('custom-class');
  });
});
