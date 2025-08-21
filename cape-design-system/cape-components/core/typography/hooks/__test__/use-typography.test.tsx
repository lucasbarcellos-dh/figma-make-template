import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTypography } from '../use-typography';
import { typographyColorList } from '../../constants';
import type { TypographyProps } from '../../type';

describe('useTypography', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTypography({
        className: 'custom-class',
        as: 'div',
        variant: 'displayXLarge',
      }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should forward system props', () => {
    const { result } = renderHook(() =>
      useTypography({
        style: { margin: '10px' },
        as: 'div',
        variant: 'displayXLarge',
        textAlign: 'center',
      }),
    );
    expect(result.current.rootProps.style).toEqual({
      margin: '10px',
      textAlign: 'center',
    });
  });

  it.each<string>(typographyColorList as readonly string[])(
    'returns provided %s color as data-color attribute',
    (color) => {
      const { result } = renderHook(() =>
        useTypography({
          color: color as TypographyProps['color'],
          as: 'div',
          variant: 'displayLarge',
        }),
      );
      expect(result.current.rootProps['data-color']).toBe(color);
    },
  );

  it('should return color props when the value is not a token.', () => {
    const { result } = renderHook(() =>
      useTypography({ color: 'red', as: 'div', variant: 'displayLarge' }),
    );
    expect(result.current.rootProps.style).toMatchObject({
      color: 'red',
    });
  });
});
