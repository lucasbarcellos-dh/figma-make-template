import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useDivider } from '../use-divider';

describe('useDivider', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useDivider({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should override props', () => {
    const {
      result: {
        current: { rootProps },
      },
    } = renderHook(() =>
      useDivider({
        orientation: 'vertical',
        size: 'medium',
        variant: 'dark',
      }),
    );

    expect(rootProps['aria-orientation']).toBe('vertical');
    expect(rootProps['data-orientation']).toBe('vertical');
    expect(rootProps['data-size']).toBe('medium');
    expect(rootProps['data-variant']).toBe('dark');
  });
});
