import { renderHook } from '@testing-library/react';
import { beforeEach, expect, describe, it, vi, type Mock } from 'vitest';
import { usePaginationItems } from '../hooks/use-pagination-items';
import { usePaginationContext } from '../../../hooks/use-pagination-context';

vi.mock('../../../hooks/use-pagination-context', () => ({
  usePaginationContext: vi.fn().mockReturnValue({
    current: 1,
    count: 10,
    isFirst: true,
    isLast: false,
  }),
}));
describe('usePaginationItems', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      usePaginationItems({ ellipsisRange: 1, className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  describe('calculates properly the items', () => {
    beforeEach(() => {
      const mockContext = {
        current: 2,
        count: 10,
        onChange: vi.fn(),
        isFirst: false,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
    });
    it('by rendering all the pages when ellipsis is disabled', () => {
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: false,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(10);
      result.current.items.forEach((item, index) => {
        expect(item.value).toBe(index + 1);
        expect(item.key).toBe(`pagination-item-${index + 1}`);
      });
    });
    it('by rendering the end ellipsis', () => {
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 1,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(5);
      expect(result.current.items[3]?.ellipsis).toBeTruthy();
      expect(result.current.items[4]?.value).toBe(10);
    });
    it('by rendering the start ellipsis', () => {
      const mockContext = {
        current: 9,
        count: 10,
        onChange: vi.fn(),
        isFirst: false,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 1,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(5);
      expect(result.current.items[1]?.ellipsis).toBeTruthy();
      expect(result.current.items[0]?.value).toBe(1);
      expect(result.current.items[4]?.value).toBe(10);
    });
    it('by rendering the start and end ellipsis', () => {
      const mockContext = {
        current: 5,
        count: 10,
        onChange: vi.fn(),
        isFirst: false,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 1,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(7);
      expect(result.current.items[1]?.ellipsis).toBeTruthy();
      expect(result.current.items[5]?.ellipsis).toBeTruthy();
      expect(result.current.items[0]?.value).toBe(1);
      expect(result.current.items[6]?.value).toBe(10);
    });
    it('by rendering the calculated number of items when the setMaxItems has a truthy value', () => {
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 1,
          setMaxItems: true,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(7);
      expect(result.current.items[0]?.value).toBe(1);
      expect(result.current.items[6]?.value).toBe(10);
    });
    it('by rendering correctly when current page is the first page', () => {
      const mockContext = {
        current: 1,
        count: 10,
        onChange: vi.fn(),
        isFirst: true,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 1,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(4);
      expect(result.current.items[0]?.value).toBe(1);
      expect(result.current.items[3]?.value).toBe(10);
    });
    it('by rendering correctly when current page is the last page', () => {
      const mockContext = {
        current: 10,
        count: 10,
        onChange: vi.fn(),
        isFirst: false,
        isLast: true,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 1,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(4);
      expect(result.current.items[0]?.value).toBe(1);
      expect(result.current.items[3]?.value).toBe(10);
    });
    it('by rendering correctly with ellipsisRange > 1', () => {
      const mockContext = {
        current: 5,
        count: 20,
        onChange: vi.fn(),
        isFirst: false,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 2,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(9);
      expect(result.current.items[1]?.ellipsis).toBeTruthy();
      expect(result.current.items[7]?.ellipsis).toBeTruthy();
      expect(result.current.items[0]?.value).toBe(1);
      expect(result.current.items[8]?.value).toBe(20);
    });
    it('by rendering correctly with ellipsisRange > 1 and current page near start', () => {
      const mockContext = {
        current: 3,
        count: 20,
        onChange: vi.fn(),
        isFirst: false,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 2,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(7);
      expect(result.current.items[5]?.ellipsis).toBeTruthy();
      expect(result.current.items[0]?.value).toBe(1);
      expect(result.current.items[6]?.value).toBe(20);
    });
    it('by rendering correctly with ellipsisRange > 1 and current page near end', () => {
      const mockContext = {
        current: 18,
        count: 20,
        onChange: vi.fn(),
        isFirst: false,
        isLast: false,
      };
      (usePaginationContext as Mock).mockReturnValue(mockContext);
      const { result } = renderHook(() =>
        usePaginationItems({
          ellipsis: true,
          ellipsisRange: 2,
          className: 'primary-class',
        }),
      );
      expect(result.current.items.length).toBe(7);
      expect(result.current.items[1]?.ellipsis).toBeTruthy();
      expect(result.current.items[0]?.value).toBe(1);
      expect(result.current.items[6]?.value).toBe(20);
    });
  });
});
