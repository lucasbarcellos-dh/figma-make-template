import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi, type Mock } from 'vitest';
import { useMergeRefs, useTransitionStatus } from '@floating-ui/react';
import { useDrawerHeader } from '../use-drawer-header';
import { useDrawerContext } from '../../../../hooks/use-drawer-context';

vi.mock('../../../../hooks/use-drawer-context', () => ({
  useDrawerContext: vi.fn(),
}));

vi.mock('@floating-ui/react', () => ({
  useTransitionStatus: vi.fn(),
  useMergeRefs: vi.fn(),
}));

describe('useDrawerHeader', () => {
  it('returns combined className', () => {
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
      useDrawerHeader({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });
});
