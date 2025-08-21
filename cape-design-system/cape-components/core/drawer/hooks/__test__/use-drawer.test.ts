import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useDrawer } from '../use-drawer';

describe('useDrawer', () => {
  it('should return the correct default props', () => {
    const {
      result: {
        current: { contextValues },
      },
    } = renderHook(() => useDrawer({}));

    expect(contextValues.open).toBeFalsy();
    expect(contextValues.placement).toBe('end');
    expect(contextValues.zIndex).toBeUndefined();
    expect(contextValues.disablePortal).toBeFalsy();
  });

  it('should override default props when provided', () => {
    const {
      result: {
        current: { contextValues },
      },
    } = renderHook(() =>
      useDrawer({
        open: true,
        zIndex: 999,
        disablePortal: true,
        placement: 'bottom',
      }),
    );

    expect(contextValues.open).toBeTruthy();
    expect(contextValues.zIndex).toBe(999);
    expect(contextValues.placement).toBe('bottom');
    expect(contextValues.disablePortal).toBeTruthy();
  });
});
