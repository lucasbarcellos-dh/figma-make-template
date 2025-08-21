import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useProgressBar } from '../use-progress-bar';

describe('useProgressBar', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useProgressBar({
        className: 'custom-class',
        max: 100,
        size: 'medium',
        variant: 'default',
      }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('omits style properties correctly', () => {
    const { result } = renderHook(() =>
      useProgressBar({
        style: { margin: 10 },
        max: 100,
        size: 'medium',
        variant: 'default',
      }),
    );

    expect(result.current.rootProps).not.toHaveProperty('margin');
  });
});
