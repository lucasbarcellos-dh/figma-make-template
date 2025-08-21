import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useCard } from '../use-card';

describe('useCard', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() => useCard({ className: 'custom-class' }));
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('generates correct variant', () => {
    const { result } = renderHook(() =>
      useCard({
        variant: 'elevated',
      }),
    );

    expect(result.current.rootProps['data-variant']).toEqual('elevated');
  });

  it('generates correct interactive state', () => {
    const { result } = renderHook(() =>
      useCard({
        selected: true,
        onSelectionChange: vi.fn(),
      }),
    );
    expect(result.current.rootProps['data-interactive']).toEqual(true);
    expect(result.current.rootProps.role).toEqual('button');
    expect(result.current.rootProps.tabIndex).toEqual(0);
    expect(result.current.rootProps['aria-pressed']).toEqual(true);
    expect(result.current.rootProps['data-selected']).toEqual(true);
  });

  it('generates disabled state when disabled is true', () => {
    const { result } = renderHook(() =>
      useCard({
        disabled: true,
      }),
    );

    expect(result.current.rootProps['data-disabled']).toEqual(true);
    expect(result.current.rootProps.role).toBeUndefined();
  });

  it('generates correct disabled state when both disabled and selected are true', () => {
    const { result } = renderHook(() =>
      useCard({
        disabled: true,
        selected: true,
      }),
    );

    expect(result.current.rootProps['data-disabled']).toEqual(true);
    expect(result.current.rootProps['data-interactive']).toEqual(false);
    expect(result.current.rootProps.role).toBeUndefined();
  });
});
