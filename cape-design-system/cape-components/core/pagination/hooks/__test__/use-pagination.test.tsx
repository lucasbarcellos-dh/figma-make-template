import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { usePagination } from '../use-pagination';

describe('usePagination', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      usePagination({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('omits style properties correctly', () => {
    const { result } = renderHook(() => usePagination({}));

    expect(result.current.rootProps).not.toHaveProperty('margin');
  });
});
