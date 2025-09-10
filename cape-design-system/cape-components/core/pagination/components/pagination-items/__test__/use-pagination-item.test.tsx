import { renderHook } from '@testing-library/react';
import { beforeEach, expect, describe, it, vi, type Mock } from 'vitest';
import { usePaginationItem } from '../hooks/use-pagination-item';
import { usePaginationContext } from '../../../hooks/use-pagination-context';

vi.mock('../../../hooks/use-pagination-context', () => ({
  usePaginationContext: vi.fn().mockReturnValue({
    current: 1,
    count: 10,
    isFirst: true,
    isLast: false,
  }),
}));

describe('usePaginationItem', () => {
  it('generates correct rootProps for values', () => {
    const { result } = renderHook(() =>
      usePaginationItem({
        className: 'primary-class',
        value: 1,
      }),
    );

    expect(result.current.rootProps.className).toContain('primary-class');
    expect(result.current.contentProps['data-selected']).toBeTruthy();
  });

  it('generates correct rootProps for ellipsis', () => {
    const { result } = renderHook(() =>
      usePaginationItem({
        className: 'primary-class',
        ellipsis: true,
      }),
    );

    expect(result.current.rootProps.className).toContain('primary-class');
    expect(result.current.contentProps['data-selected']).toBeFalsy();
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
    it('by emitting value', () => {
      const { result } = renderHook(() =>
        usePaginationItem({
          value: 3,
          className: 'primary-class',
        }),
      );
      result.current.contentProps.onClick &&
        result.current.contentProps.onClick();
      expect(onChange).toHaveBeenCalledWith(3);
    });
  });
});
