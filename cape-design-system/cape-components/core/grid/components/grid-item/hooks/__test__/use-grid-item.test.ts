import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useGridItem } from '../use-grid-item';

describe('useGridItem', () => {
  it('should return correct rootProps with default values', () => {
    const { result } = renderHook(() => useGridItem({}));
    expect(result.current.rootProps.style).toEqual({});
  });

  it('should return correct rootProps with provided props', () => {
    const { result } = renderHook(() =>
      useGridItem({
        xs: 4,
        sm: 4,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
        className: 'custom-class',
      }),
    );

    expect(result.current.rootProps.style).contain({
      '--cp-grid-column-xs': 4,
      '--cp-grid-column-sm': 4,
      '--cp-grid-column-md': 3,
      '--cp-grid-column-lg': 3,
      '--cp-grid-column-xl': 2,
      '--cp-grid-column-xxl': 2,
    });
    expect(result.current.rootProps.className).contain('custom-class');
  });

  it('should return correct rootProps when some breakpoints are provided', () => {
    const { result } = renderHook(() =>
      useGridItem({
        xs: 4,
        lg: 3,
      }),
    );

    expect(result.current.rootProps.style).contain({
      '--cp-grid-column-xs': 4,
      '--cp-grid-column-sm': 4,
      '--cp-grid-column-md': 4,
      '--cp-grid-column-lg': 3,
      '--cp-grid-column-xl': 3,
      '--cp-grid-column-xxl': 3,
    });
  });

  it('should return correct rootProps when only one breakpoint are provided', () => {
    const { result } = renderHook(() =>
      useGridItem({
        lg: 3,
      }),
    );

    expect(result.current.rootProps.style).contain({
      '--cp-grid-column-lg': 3,
      '--cp-grid-column-xl': 3,
      '--cp-grid-column-xxl': 3,
    });
  });
});
