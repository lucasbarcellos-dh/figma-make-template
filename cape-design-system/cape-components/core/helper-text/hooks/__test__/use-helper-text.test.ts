import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useHelperText } from '../use-helper-text';
import type { HelperTextProps } from '../../type';

describe('useHelperText', () => {
  const variants = ['neutral', 'error', 'success'];
  it.each(variants)('returns provided %s variant prop', (variant) => {
    const { result } = renderHook(() =>
      useHelperText({ variant: variant as HelperTextProps['variant'] }),
    );
    expect(variants).toContain(variant);
    expect(result.current.rootProps['data-variant']).toBe(variant);
  });

  const sizes = ['small', 'medium', 'large'];
  it.each(sizes)('returns provided %s variant prop', (size) => {
    const { result } = renderHook(() =>
      useHelperText({ size: size as HelperTextProps['size'] }),
    );
    expect(sizes).toContain(size);
    expect(result.current.rootProps['data-size']).toBe(size);
  });

  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useHelperText({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should forward system props', () => {
    const { result } = renderHook(() =>
      useHelperText({ style: { margin: '10px' } }),
    );
    expect(result.current.rootProps.style).toMatchObject({
      margin: '10px',
    });
  });
});
