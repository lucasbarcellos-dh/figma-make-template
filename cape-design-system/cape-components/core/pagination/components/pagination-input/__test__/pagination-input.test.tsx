import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, expect, describe, it, vi, type Mock } from 'vitest';
import { usePaginationContext } from '../../../hooks/use-pagination-context';
import { PaginationInput } from '../pagination-input';

vi.mock('../../../hooks/use-pagination-context', () => ({
  usePaginationContext: vi.fn().mockReturnValue({
    count: 10,
  }),
}));

describe('usePaginationInput', () => {
  describe('triggers correct onChange event', () => {
    const onChange = vi.fn();
    beforeEach(() => {
      const mockContext = {
        count: 10,
        onChange,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
    });
    it('by updating the value', () => {
      render(<PaginationInput data-testid="input" placeholder="page" />);
      const input = screen.getByPlaceholderText('page');
      fireEvent.change(input, { target: { value: '3' } });
      expect(onChange).toHaveBeenCalledWith(3);
    });
  });

  describe('shows error', () => {
    it('if the value is higher than the count', () => {
      const mockContext = {
        count: 10,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      render(<PaginationInput data-testid="input" placeholder="page" />);
      //const input = screen.getByTestId('input');
      const input = screen.getByPlaceholderText('page');
      fireEvent.change(input, { target: { value: '11' } });
      expect(
        screen.getByTestId('input').getAttribute('data-error'),
      ).toBeTruthy();
    });
    it('if the input is NaN or string', () => {
      const mockContext = {
        count: 10,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      render(<PaginationInput data-testid="input" placeholder="page" />);
      //const input = screen.getByTestId('input');
      const input = screen.getByPlaceholderText('page');
      fireEvent.change(input, { target: { value: 'Hi' } });
      expect(
        screen.getByTestId('input').getAttribute('data-error'),
      ).toBeTruthy();
    });
  });
});
