import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTabs } from '../use-tabs';

describe('useTabs', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() => useTabs({ className: 'custom-class' }));
    expect(result.current.className).toContain('custom-class');
  });

  it('omits style properties correctly', () => {
    const { result } = renderHook(() => useTabs({ style: { margin: 10 } }));
    expect(result.current).not.toHaveProperty('margin');
  });

  it('sanitizes custom properties in the style object', () => {
    const { result } = renderHook(() => useTabs({ style: { color: 'black' } }));
    expect(result.current.style).toHaveProperty('color', 'black');
  });

  it('sets the divider attribute correctly based on divider prop', () => {
    const { result: resultWithoutDivider } = renderHook(() =>
      useTabs({ divider: false }),
    );
    expect(resultWithoutDivider.current['data-divider']).toBe(false);
  });
});
