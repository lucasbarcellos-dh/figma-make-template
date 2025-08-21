import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { createRef } from 'react';
import { userEvent } from '@testing-library/user-event';
import { Link } from '../link';
import { Button } from '../../button';

describe('Link Component', () => {
  it('renders without crashing', () => {
    render(<Link data-testid="link" />);
    const element = screen.getByTestId('link');
    expect(element).toBeInTheDocument();
  });

  it('renders as `a` by default', () => {
    render(<Link data-testid="link" />);
    const element = screen.getByTestId('link');
    expect(element.tagName).toBe('A');
  });

  it('renders with custom class', () => {
    render(<Link className="custom-class" data-testid="link" />);
    const element = screen.getByTestId('link');
    expect(element).toHaveClass('custom-class');
  });

  it('applies style prop correctly', () => {
    render(
      <Link data-testid="link" style={{ margin: '10px', padding: '50px' }} />,
    );
    const element = screen.getByTestId('link');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });

  it('renders with default props', () => {
    render(<Link data-testid="link">Click me</Link>);
    const link = screen.getByTestId('link');

    expect(link).toBeInTheDocument();
  });

  it('applies custom class names', () => {
    render(
      <Link className="custom-link" data-testid="link">
        Click me
      </Link>,
    );
    const link = screen.getByTestId('link');

    expect(link).toHaveClass('custom-link');
  });

  it('assigns ref correctly', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<Link ref={ref}>Click me</Link>);
    const link = ref.current;
    expect(link).toBeDefined();
    expect(link).toBeInstanceOf(HTMLAnchorElement);
  });

  it('displays children', () => {
    render(<Link data-testid="link">Custom Text</Link>);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Custom Text');
  });

  it('use children as slot when asChild is set to true', () => {
    render(
      <Link asChild data-testid="link">
        <Button>Custom Text</Button>
      </Link>,
    );
    const link = screen.getByRole('button');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Custom Text');
  });

  it('assigns ref correctly', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link asChild ref={ref}>
        <Button>Custom Text</Button>
      </Link>,
    );
    const link = ref.current;
    expect(link).toBeDefined();
    expect(link).toBeInstanceOf(HTMLButtonElement);
  });

  it('merge styles correctly', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link asChild data-testid="link" ref={ref} style={{ width: '100px' }}>
        <Button style={{ height: '50px' }}>Custom Text</Button>
      </Link>,
    );
    const link = screen.getByTestId('link');
    expect(link).toBeDefined();
    expect(link).toHaveStyle({
      width: '100px',
      height: '50px',
    });
  });

  it('merges classNames correctly', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link asChild className="linkClass" data-testid="link" ref={ref}>
        <Button className="buttonClass" style={{ height: '50px' }}>
          Custom Text
        </Button>
      </Link>,
    );
    const link = screen.getByTestId('link');
    expect(link).toBeDefined();
    expect(link).toHaveClass('linkClass', 'buttonClass');
  });

  it('trigger all handlers correctly', async () => {
    const childHandler = vi.fn();
    const parentHandler = vi.fn();
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link asChild data-testid="link" onClick={parentHandler} ref={ref}>
        <Button onClick={childHandler} style={{ height: '50px' }}>
          Custom Text
        </Button>
      </Link>,
    );
    const link = screen.getByTestId('link');
    expect(link).toBeDefined();
    await userEvent.click(link);
    expect(childHandler).toHaveBeenCalled();
    expect(parentHandler).toHaveBeenCalled();
  });
});
