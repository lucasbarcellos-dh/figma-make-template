import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useBackdrop } from '../use-backdrop';

describe('useBackdrop', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useBackdrop({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should override props', () => {
    const { result } = renderHook(() =>
      useBackdrop({
        open: true,
        zIndex: 99,
      }),
    );

    expect(result.current.rootProps['data-open']).toBe(true);
    expect(result.current.rootProps.style).toMatchObject({
      '--cp-backdrop-z-index': 99,
    });
  });

  it('should block scroll when Backdrop is open', () => {
    renderHook(() => useBackdrop({ open: true }));

    expect(document.documentElement.style.overflow).toBe('hidden');
    expect(document.documentElement.style.position).toBe('relative');
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.position).toBe('relative');
  });

  it('should unblock scroll when Backdrop is close', () => {
    renderHook(() => useBackdrop({ open: false }));

    expect(document.documentElement.style.overflow).toBe('');
    expect(document.documentElement.style.position).toBe('');
    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.position).toBe('');
  });

  it('should unlock scroll on component unmount', () => {
    const { unmount } = renderHook(() => useBackdrop({ open: true }));
    unmount();

    expect(document.documentElement.style.overflow).toBe('');
    expect(document.documentElement.style.position).toBe('');
    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.position).toBe('');
  });
});
