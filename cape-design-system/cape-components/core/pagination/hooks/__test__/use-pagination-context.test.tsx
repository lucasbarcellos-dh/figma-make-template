import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import type { PaginationContextType } from '../use-pagination-context';
import {
  PaginationContext,
  usePaginationContext,
} from '../use-pagination-context';

describe('usePaginationContext', () => {
  it('throws an error when context is null', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
    try {
      renderHook(() => usePaginationContext());
    } catch (e) {
      expect(e).toEqual(new Error('Context is null'));
    }
  });

  it('returns context value when context is provided', () => {
    const contextValue: PaginationContextType = {
      current: 1,
      count: 10,
      onChange: () => vi.fn(),
      isFirst: false,
      isLast: false,
    };

    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <PaginationContext.Provider value={contextValue}>
        {children}
      </PaginationContext.Provider>
    );

    const { result } = renderHook(() => usePaginationContext(), { wrapper });
    expect(result.current).toBe(contextValue);
  });
});
