import { useRef } from 'react';
import { render, screen, renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { CardBody } from '../card-body';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<CardBody>Test Card Body</CardBody>);
    const element = screen.getByText('Test Card Body');
    expect(element).toBeInTheDocument();
  });

  it('should forward the ref', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    render(<CardBody ref={result.current} />);
    expect(result.current.current).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<CardBody>Test Card Body</CardBody>);
    expect(screen.getByText('Test Card Body').tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<CardBody className="custom-class">Test Card Body</CardBody>);
    const element = screen.getByText('Test Card Body');
    expect(element).toHaveClass('custom-class');
  });
});
