import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useTabPanel } from '../use-tab-panel';

vi.mock('../../../../hooks/use-tabs-context', () => ({
  useTabsContext: vi.fn(() => ({ active: '1' })),
}));

describe('useTabPanel', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTabPanel({ className: 'custom-class', value: '0' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('omits style properties correctly', () => {
    const { result } = renderHook(() =>
      useTabPanel({ style: { margin: 10 }, value: '0' }),
    );

    expect(result.current.rootProps).not.toHaveProperty('margin');
  });

  it('sets correct "data-active" attribute based on value and active tab', () => {
    const { result } = renderHook(() => useTabPanel({ value: '0' }));
    expect(result.current.rootProps['data-active']).toBe(false);
  });

  it('sets correct "data-active" attribute when tab is active', () => {
    // Set the active value in the context
    const { result } = renderHook(() => useTabPanel({ value: '1' }));
    expect(result.current.rootProps['data-active']).toBe(true);
  });

  it('sets the correct role attribute', () => {
    const { result } = renderHook(() => useTabPanel({ value: '0' }));
    expect(result.current.rootProps.role).toBe('tabpanel');
  });

  it('hides tab panel when value does not match active tab', () => {
    const { result } = renderHook(() => useTabPanel({ value: '0' }));
    expect(result.current.rootProps.hidden).toBe(true);
  });

  it('does not hide tab panel when value matches active tab', () => {
    // Set the active value in the context
    const { result } = renderHook(() => useTabPanel({ value: '1' }));
    expect(result.current.rootProps.hidden).toBe(false);
  });

  it('sets correct aria-labelledby attribute', () => {
    const { result } = renderHook(() => useTabPanel({ value: '0' }));
    expect(result.current.rootProps['aria-labelledby']).toBe(
      'cape-tabs-tab-button-0',
    );
  });
});
