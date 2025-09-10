import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useTooltip } from '../use-tooltip';

vi.mock('../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('useTooltip', () => {
  it('returns the correct default props', () => {
    const {
      result: {
        current: { contextValues },
      },
    } = renderHook(() => useTooltip({}));

    expect(contextValues.open).toBeFalsy();
    expect(contextValues.placement).toBe('bottom');
    expect(contextValues.zIndex).toBeUndefined();
    expect(contextValues.disablePortal).toBeFalsy();
  });

  it('overrides default props when provided', () => {
    const {
      result: {
        current: { contextValues },
      },
    } = renderHook(() =>
      useTooltip({
        open: true,
        placement: 'top',
        zIndex: 999,
        disablePortal: true,
        arrow: false,
      }),
    );

    expect(contextValues.open).toBeTruthy();
    expect(contextValues.placement).toBe('top');
    expect(contextValues.zIndex).toBe(999);
    expect(contextValues.disablePortal).toBeTruthy();
  });
});
