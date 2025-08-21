import { useMergeRefs, useTransitionStatus } from '@floating-ui/react';
import { renderHook } from '@testing-library/react';
import type { Mock } from 'vitest';
import { expect, describe, it, vi } from 'vitest';
import { useDrawerContext } from '../../../../hooks/use-drawer-context';
import { useDrawerContent } from '../use-drawer-content';

vi.mock('../../../../hooks/use-drawer-context', () => ({
  useDrawerContext: vi.fn(),
}));

vi.mock('@floating-ui/react', () => ({
  useTransitionStatus: vi.fn(),
  useMergeRefs: vi.fn(),
}));

describe('useDrawerContent', () => {
  it('returns correct structure and default values with minimal valid input', () => {
    const mockContext = {
      context: {},
      refs: { setFloating: vi.fn() },
      disablePortal: false,
      zIndex: 1000,
      open: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- mocking props
      getFloatingProps: vi.fn((props) => props),
    };
    (useDrawerContext as Mock).mockReturnValue(mockContext);
    (useMergeRefs as Mock).mockReturnValue(vi.fn());
    (useTransitionStatus as Mock).mockReturnValue(vi.fn());

    const { result } = renderHook(() =>
      useDrawerContent({ className: 'test-class' }),
    );

    expect(result.current.rootProps).toBeDefined();
    expect(result.current.rootProps.className).toContain('test-class');
    // @ts-expect-error -- ignore next line for css variable
    expect(result.current.rootProps.style['--cp-drawer-z-index']).toBe(1000);
    expect(result.current.backdropProps.disablePortal).toBe(true);
    expect(result.current.disablePortal).toBe(false);
    expect(mockContext.getFloatingProps).toHaveBeenCalled();
    expect(useMergeRefs).toHaveBeenCalledWith([
      mockContext.refs.setFloating,
      undefined,
    ]);
  });
});
