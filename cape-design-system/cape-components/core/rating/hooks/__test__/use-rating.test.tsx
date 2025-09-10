import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useRating } from '../use-rating';

describe('useRating', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useRating({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('omits style properties correctly', () => {
    const { result } = renderHook(() => useRating({ style: { margin: 10 } }));

    expect(result.current.rootProps).not.toHaveProperty('margin');
  });
});
