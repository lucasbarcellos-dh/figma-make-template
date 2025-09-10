import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useSkeleton } from '../use-skeleton';

describe('useSkeleton', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useSkeleton({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('applies the correct variant attribute', () => {
    const variant = 'text';
    const { result } = renderHook(() => useSkeleton({ variant }));
    expect(result.current.rootProps).toHaveProperty('data-variant');
    expect(result.current.rootProps['data-variant']).toBe('text');
    expect(result.current.rootProps['data-variant']).not.toBe('rounded');
  });
});
