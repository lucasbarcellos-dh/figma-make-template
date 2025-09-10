import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useDialog } from '../use-dialog';

vi.mock('../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('useDialog', () => {
  it('should return the correct default props', () => {
    const {
      result: {
        current: { contextValues },
      },
    } = renderHook(() => useDialog({}));

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
      useDialog({
        open: true,
        zIndex: 999,
        disablePortal: true,
      }),
    );

    expect(contextValues.open).toBeTruthy();
    expect(contextValues.zIndex).toBe(999);
    expect(contextValues.disablePortal).toBeTruthy();
  });
});
