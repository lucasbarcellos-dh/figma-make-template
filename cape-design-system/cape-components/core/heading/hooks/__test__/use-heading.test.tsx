import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useHeading } from '../use-heading';
import { headingColorList } from '../../constants';
import type { HeadingProps } from '../../type';

describe('useHeading', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useHeading({
        level: 1,
        className: 'custom-class',
      }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('forwards style props', () => {
    const { result } = renderHook(() =>
      useHeading({
        level: 2,
        style: { marginTop: '10px' },
      }),
    );
    expect(result.current.rootProps.style).toMatchObject({
      marginTop: '10px',
    });
  });

  it.each<string>(headingColorList as readonly string[])(
    'returns provided %s color as data-color attribute',
    (color) => {
      const { result } = renderHook(() =>
        useHeading({
          level: 3,
          color: color as HeadingProps['color'],
        }),
      );
      expect(result.current.rootProps['data-color']).toBe(color);
    },
  );

  it('returns color style when the value is not a token', () => {
    const { result } = renderHook(() =>
      useHeading({
        level: 4,
        color: 'hotpink',
        variant: 'titleSmall',
      }),
    );
    expect(result.current.rootProps.style).toMatchObject({
      color: 'hotpink',
    });
  });

  it('applies the data-variant attribute', () => {
    const { result } = renderHook(() =>
      useHeading({
        level: 5,
        variant: 'displayLarge',
      }),
    );
    expect(result.current.rootProps['data-variant']).toBe('displayLarge');
  });

  it('skips data-variant if variant is not provided', () => {
    const { result } = renderHook(() =>
      useHeading({
        level: 2,
      }),
    );
    expect(result.current.rootProps['data-variant']).toBeUndefined();
  });
});
