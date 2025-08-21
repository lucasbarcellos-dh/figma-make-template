import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTable } from '../use-table';

describe('useTable', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTable({ className: 'custom-class' }),
    );

    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns size prop', () => {
    const { result } = renderHook(() => useTable({ size: 'small' }));

    expect(result.current.rootProps).toHaveProperty('data-size');
    expect(result.current.rootProps['data-size']).toBe('small');
  });

  it('returns style properties', () => {
    const { result } = renderHook(() => useTable({ style: { width: 10 } }));

    expect(result.current.rootProps).toHaveProperty('style');
    expect(result.current.rootProps.style).toHaveProperty('width');
    expect(result.current.rootProps).toHaveProperty('data-size');
  });
});
