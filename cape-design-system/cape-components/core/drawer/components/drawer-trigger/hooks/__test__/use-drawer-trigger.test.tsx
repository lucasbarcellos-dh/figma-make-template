import { useMergeRefs } from '@floating-ui/react';
import { renderHook } from '@testing-library/react';
import type { Mock } from 'vitest';
import { expect, describe, it, vi } from 'vitest';
import { useDrawerContext } from '../../../../hooks/use-drawer-context';
import { useDrawerTrigger } from '../use-drawer-trigger';

vi.mock('../../../../hooks/use-drawer-context', () => ({
  useDrawerContext: vi.fn(),
}));

vi.mock('@floating-ui/react', () => ({
  useMergeRefs: vi.fn(),
}));

describe('useDrawerTrigger', () => {
  it('returns correct structure and default values with minimal valid input', () => {
    const mockContext = {
      refs: { setReference: vi.fn() },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- mocking props
      getReferenceProps: vi.fn((props) => props),
      open: false,
    };
    (useDrawerContext as Mock).mockReturnValue(mockContext);
    (useMergeRefs as Mock).mockReturnValue(vi.fn());

    const { result } = renderHook(() =>
      useDrawerTrigger({
        className: 'test-class',
        children: <div />,
        ref: vi.fn(),
      }),
    );

    expect(result.current.rootProps).toBeDefined();
    expect(result.current.rootProps.className).toBe('test-class');
    expect(mockContext.getReferenceProps).toHaveBeenCalled();
    expect(useMergeRefs).toHaveBeenCalled();
  });

  it('calls console.warn if there is no children', () => {
    const spy = vi.spyOn(console, 'warn');
    const mockContext = {
      refs: { setReference: vi.fn() },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- mocking props
      getReferenceProps: vi.fn((props) => props),
      open: false,
    };
    (useDrawerContext as Mock).mockReturnValue(mockContext);
    (useMergeRefs as Mock).mockReturnValue(vi.fn());

    const { result } = renderHook(() =>
      useDrawerTrigger({
        className: 'test-class',
        children: null,
        ref: vi.fn(),
      }),
    );

    expect(result.current.rootProps).toBeDefined();
    expect(result.current.rootProps.className).toBe('test-class');
    expect(mockContext.getReferenceProps).toHaveBeenCalled();
    expect(useMergeRefs).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledOnce();
  });
});
