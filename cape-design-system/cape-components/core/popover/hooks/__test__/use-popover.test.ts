import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { usePopover } from '../use-popover';

vi.mock('../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('usePopover', () => {
  it('should return the correct default props', () => {
    const {
      result: {
        current: { contextValues },
      },
    } = renderHook(() => usePopover({}));

    expect(contextValues.open).toBeFalsy();
    expect(contextValues.placement).toBe('bottom');
    expect(contextValues.zIndex).toBeUndefined();
    expect(contextValues.disablePortal).toBeFalsy();
  });

  it('should override default props when provided', () => {
    const {
      result: {
        current: { contextValues },
      },
    } = renderHook(() =>
      usePopover({
        open: true,
        placement: 'top',
        zIndex: 999,
        disablePortal: true,
      }),
    );

    expect(contextValues.open).toBeTruthy();
    expect(contextValues.placement).toBe('top');
    expect(contextValues.zIndex).toBe(999);
    expect(contextValues.disablePortal).toBeTruthy();
  });
});
