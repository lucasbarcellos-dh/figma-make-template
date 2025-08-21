import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTableHead } from '../use-table-head';

describe('useTableHead', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTableHead({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns table cell attributes', () => {
    const { result } = renderHook(() =>
      useTableHead({ rowSpan: 2, colSpan: 3 }),
    );

    expect(result.current.rootProps).toHaveProperty('colSpan');
    expect(result.current.rootProps).toHaveProperty('rowSpan');
  });
});
