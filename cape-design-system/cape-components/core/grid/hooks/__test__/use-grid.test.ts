import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import type { CSSProperties } from 'react';
import { useGrid } from '../use-grid';
import type { GridProps } from '../../type';

describe('useGrid hook', () => {
  it('returns default rootProps when no props are provided', () => {
    const { result } = renderHook(() => useGrid({}));
    const { rootProps } = result.current;
    expect(rootProps.style).toEqual({});
  });

  it('combines provided className with default className', () => {
    const { result } = renderHook(() => useGrid({ className: 'custom-class' }));
    const { rootProps } = result.current;
    expect(rootProps.className).toContain('custom-class');
  });

  it('applies gutter spacing styles correctly', () => {
    const gap: GridProps['gap'] = {
      xs: 'wide',
      md: 'condensed',
    };
    const { result } = renderHook(() => useGrid({ gap }));
    const { rootProps } = result.current;
    expect(rootProps.style).toEqual({
      '--cp-grid-gap-xs': 'var(--cp-grid-gutter-wide)',
      '--cp-grid-gap-md': 'var(--cp-grid-gutter-condensed)',
    });
  });

  it('overrides gap with props', () => {
    const gap: GridProps['gap'] = {
      xs: 'wide',
      md: 'condensed',
    };
    const { result } = renderHook(() =>
      useGrid({
        gap,
        style: { '--cp-grid-gap-md': '24px' } as CSSProperties,
      }),
    );
    const { rootProps } = result.current;

    expect(rootProps.style).toEqual({
      '--cp-grid-gap-xs': 'var(--cp-grid-gutter-wide)',
      '--cp-grid-gap-md': '24px', // overridden by props
    });
  });
});
