import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PaginationInfo } from '../pagination-info';

describe('PaginationInfo', () => {
  it('renders children correctly', () => {
    render(<PaginationInfo>Test Content</PaginationInfo>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<PaginationInfo ref={ref}>Test Content</PaginationInfo>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('applies default styles correctly', () => {
    render(<PaginationInfo>Test Content</PaginationInfo>);
    const element = screen.getByText('Test Content');
    expect(element).toHaveStyle('font-variant-numeric: tabular-nums');
  });

  it('applies additional props correctly', () => {
    render(
      <PaginationInfo data-testid="pagination-info">
        Test Content
      </PaginationInfo>,
    );
    expect(screen.getByTestId('pagination-info')).toBeInTheDocument();
  });
});
