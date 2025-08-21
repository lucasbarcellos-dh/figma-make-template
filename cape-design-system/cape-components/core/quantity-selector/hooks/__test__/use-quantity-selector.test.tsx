import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useQuantitySelector } from '../use-quantity-selector';

describe('useQuantitySelector', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useQuantitySelector({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns the size prop value as data-size attribute', () => {
    const { result } = renderHook(() => useQuantitySelector({ size: 'large' }));
    expect(result.current.rootProps['data-size']).toEqual('large');
  });
});
