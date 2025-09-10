import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableResizeHandle } from '..';

describe('<TableResizeHandle / />', () => {
  it('renders the component', () => {
    render(<TableResizeHandle data-testid="resize-handle" />);

    const element = screen.getByTestId('resize-handle');

    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('SPAN');
  });

  it('renders with a custom class', () => {
    render(
      <TableResizeHandle
        className="custom-class"
        data-testid="resize-handle"
      />,
    );
    const element = screen.getByTestId('resize-handle');
    expect(element).toHaveClass('custom-class');
  });

  it('renders with resizing prop sets to true', () => {
    render(<TableResizeHandle data-testid="resize-handle" resizing />);
    const element = screen.getByTestId('resize-handle');
    expect(element).toHaveAttribute('data-resizing', 'true');
  });
});
