import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTabList } from '../use-tab-list';

describe('useTabList', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTabList({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('correctly applies the role attribute to the root element', () => {
    const { result } = renderHook(() => useTabList({}));
    expect(result.current.rootProps.role).toBe('tablist');
  });

  it('sanitizes custom style properties', () => {
    const { result } = renderHook(() =>
      useTabList({ style: { color: 'black', margin: 10 } }),
    );
    expect(result.current.rootProps.style).toHaveProperty('color', 'black');
    expect(result.current.rootProps).not.toHaveProperty('margin');
  });

  it('applies default styles when no custom className or style is provided', () => {
    const { result } = renderHook(() => useTabList({}));
    expect(result.current.rootProps.className).toContain('list');
    expect(result.current.rootProps.style).toBeUndefined();
  });
});
