import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useSegmentedControl } from '../use-segmented-control';

describe('useSegmentedControl', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useSegmentedControl({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns correct data-size attribute', () => {
    const { result } = renderHook(() => useSegmentedControl({ size: 'small' }));
    expect(result.current.rootProps['data-size']).toBe('small');
  });
});
