import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTableCell } from '../use-table-cell';

describe('useTableCell', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTableCell({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns table cell attributes', () => {
    const { result } = renderHook(() =>
      useTableCell({ rowSpan: 2, colSpan: 3 }),
    );

    expect(result.current.rootProps).toHaveProperty('colSpan');
    expect(result.current.rootProps).toHaveProperty('rowSpan');
  });
});
