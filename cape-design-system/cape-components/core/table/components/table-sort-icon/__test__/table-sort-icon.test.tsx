import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TableSortIcon } from '..';

describe('<TableSortIcon / />', () => {
  it('renders the component', () => {
    render(<TableSortIcon data-testid="sort-icon" />);

    const element = screen.getByTestId('sort-icon');

    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe('svg');
  });

  it('renders with a custom class', () => {
    render(<TableSortIcon className="custom-class" data-testid="sort-icon" />);
    const element = screen.getByTestId('sort-icon');
    expect(element).toHaveClass('custom-class');
  });

  it('renders with small size', () => {
    render(<TableSortIcon data-testid="sort-icon" size="small" />);
    const element = screen.getByTestId('sort-icon');
    expect(element).toHaveAttribute('data-cape-icon-size', 'small');
  });
});
