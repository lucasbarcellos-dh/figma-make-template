import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useTabItem } from '../use-tab-item';

vi.mock('../../../../hooks/use-tabs-context', () => ({
  useTabsContext: vi.fn(() => ({ active: '1' })),
}));

describe('useTabItem', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTabItem({ className: 'custom-class', value: '1' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('omits style properties correctly', () => {
    const { result } = renderHook(() => useTabItem({ value: '1' }));

    expect(result.current.rootProps).not.toHaveProperty('margin');
  });

  it('applies style and sanitized custom properties', () => {
    const customStyle = { backgroundColor: 'red', padding: '10px' };
    const { result } = renderHook(() =>
      useTabItem({ style: customStyle, value: '1' }),
    );

    expect(result.current.rootProps.style).toMatchObject({
      backgroundColor: 'red',
      padding: '10px',
    });
  });

  it('returns the correct active state based on context', () => {
    const { result } = renderHook(() => useTabItem({ value: '1' }));

    expect(result.current.rootProps['data-active']).toBe(true);
  });

  it('returns the correct inactive state based on context', () => {
    const { result } = renderHook(() => useTabItem({ value: '2' }));

    expect(result.current.rootProps['data-active']).toBe(undefined);
  });

  it('sets "data-disabled" attribute when disabled', () => {
    const { result } = renderHook(() =>
      useTabItem({ value: '1', disabled: true }),
    );
    expect(result.current.rootProps['data-disabled']).toBe(true);
    expect(result.current.rootProps['aria-hidden']).toBe(true);
  });

  it('does not set "data-disabled" or "aria-hidden" when not disabled', () => {
    const { result } = renderHook(() =>
      useTabItem({ value: '1', disabled: false }),
    );
    expect(result.current.rootProps['data-disabled']).toBe(undefined);
    expect(result.current.rootProps['aria-hidden']).toBe(undefined);
  });
});
