import { act, renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useTabButton } from '../use-tab-button';

vi.mock('../../../../hooks/use-tabs-context', () => ({
  useTabsContext: vi.fn().mockReturnValue({ active: '1', setActive: vi.fn() }),
}));

describe('useTabButton', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTabButton({ className: 'custom-class', value: '1' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('omits style properties correctly', () => {
    const { result } = renderHook(() => useTabButton({ value: '1' }));

    expect(result.current.rootProps).not.toHaveProperty('margin');
  });

  it('returns correct aria attributes for selected tab', () => {
    const { result } = renderHook(() => useTabButton({ value: '1' }));
    expect(result.current.rootProps['aria-selected']).toBe(true);
    expect(result.current.rootProps['aria-controls']).toBe('cape-tabs-panel-1');
    expect(result.current.rootProps.role).toBe('tab');
  });

  it('returns correct aria attributes for unselected tab', () => {
    const { result } = renderHook(() => useTabButton({ value: '2' }));
    expect(result.current.rootProps['aria-selected']).toBe(false);
  });

  it('sets id based on value', () => {
    const { result } = renderHook(() => useTabButton({ value: '1' }));
    expect(result.current.rootProps.id).toBe('cape-tabs-tab-button-1');
  });

  it('disables button when disabled prop is true', () => {
    const { result } = renderHook(() =>
      useTabButton({ value: '1', disabled: true }),
    );
    expect(result.current.rootProps.disabled).toBe(true);
  });

  it('handles onClick and sets active tab correctly', () => {
    const onClick = vi.fn();

    const { result } = renderHook(() => useTabButton({ value: '2', onClick }));

    act(() => {
      if (result.current.rootProps.onClick)
        result.current.rootProps.onClick({} as React.MouseEvent<HTMLElement>);
    });

    expect(onClick).toHaveBeenCalled();
  });

  it('applies sanitized style properties', () => {
    const { result } = renderHook(() =>
      useTabButton({
        value: '1',
        style: { color: 'red', padding: '10px' },
      }),
    );
    expect(result.current.rootProps.style).toHaveProperty('color', 'red');
    expect(result.current.rootProps.style).toHaveProperty('padding', '10px');
  });
});
