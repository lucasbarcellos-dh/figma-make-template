import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, expect, describe, it, vi, type Mock } from 'vitest';
import { usePaginationContext } from '../../../hooks/use-pagination-context';
import { PaginationButton } from '../pagination-button';

vi.mock('../../../hooks/use-pagination-context', () => ({
  usePaginationContext: vi.fn().mockReturnValue({
    current: 1,
    count: 10,
    isFirst: true,
    isLast: false,
  }),
}));

describe('PaginationButton', () => {
  it('propagates correct onclick event', async () => {
    const onClick = vi.fn();
    const onChange = vi.fn();
    const mockContext = {
      current: 1,
      count: 10,
      onChange,
      isFirst: false,
      isLast: false,
    };
    (usePaginationContext as Mock).mockReturnValue(mockContext);
    render(<PaginationButton action="prev" onClick={onClick} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(onChange).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalled();
  });

  describe('triggers correct onChange event', () => {
    const onChange = vi.fn();
    beforeEach(() => {
      const mockContext = {
        current: 2,
        count: 10,
        onChange,
        isFirst: false,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
    });
    it('by emitting next value', async () => {
      render(<PaginationButton action="next" />);
      const button = screen.getByRole('button');
      await userEvent.click(button);
      expect(onChange).toHaveBeenCalledWith(3);
    });
    it('by emitting last value', async () => {
      render(<PaginationButton action="last" />);
      const button = screen.getByRole('button');
      await userEvent.click(button);
      expect(onChange).toHaveBeenCalledWith(10);
    });
    it('by emitting prev value', async () => {
      render(<PaginationButton action="prev" />);
      const button = screen.getByRole('button');
      await userEvent.click(button);
      expect(onChange).toHaveBeenCalledWith(1);
    });
    it('by emitting first value', async () => {
      render(<PaginationButton action="first" />);
      const button = screen.getByRole('button');
      await userEvent.click(button);
      expect(onChange).toHaveBeenCalledWith(1);
    });
  });

  describe('disables the button', () => {
    it('if the action is first and is the first page', () => {
      const mockContext = {
        current: 2,
        count: 10,
        isFirst: true,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      render(<PaginationButton action="first" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('disabled');
    });
    it('if the action is prev and is the first page', () => {
      const mockContext = {
        current: 1,
        count: 10,
        isFirst: true,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      render(<PaginationButton action="prev" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('disabled');
    });
    it('if the action is next and is the last page', () => {
      const mockContext = {
        current: 10,
        count: 10,
        isFirst: false,
        isLast: true,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      render(<PaginationButton action="next" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('disabled');
    });
    it('if the action is last and is the last page', () => {
      const mockContext = {
        current: 10,
        count: 10,
        isFirst: false,
        isLast: true,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      render(<PaginationButton action="last" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('disabled');
    });
  });
});
