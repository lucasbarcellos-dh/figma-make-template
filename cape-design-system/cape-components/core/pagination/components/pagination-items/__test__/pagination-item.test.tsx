import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PaginationItem } from '../pagination-item';
import type { PaginationItemProps } from '../type';

vi.mock('../hooks/use-pagination-item', () => ({
  usePaginationItem: vi.fn().mockReturnValue({
    rootProps: { className: 'test-class', 'data-testid': 'item' },
  }),
}));

describe('PaginationItem', () => {
  const renderComponent = (props: PaginationItemProps) => {
    return render(<PaginationItem {...props} />);
  };

  it('renders the value when ellipsis is false', () => {
    renderComponent({ value: 1, ellipsis: false });
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders ellipsis when ellipsis is true', () => {
    renderComponent({ value: 1, ellipsis: true });
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  it('applies rootProps to the li element', () => {
    renderComponent({ value: 1, ellipsis: false, className: 'test-class' });
    expect(screen.getByTestId('item')).toHaveAttribute('class', 'test-class');
  });
});
