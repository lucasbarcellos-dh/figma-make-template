import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi, type Mock } from 'vitest';
import { useMergeRefs, useTransitionStatus } from '@floating-ui/react';
import { useDialogBody } from '../use-dialog-body';
import { useDialogContext } from '../../../../hooks/use-dialog-context';

vi.mock('../../../../hooks/use-dialog-context', () => ({
  useDialogContext: vi.fn(),
}));

vi.mock('@floating-ui/react', () => ({
  useTransitionStatus: vi.fn(),
  useMergeRefs: vi.fn(),
}));

describe('useDialogBody', () => {
  it('returns combined className', () => {
    const mockContext = {
      context: {},
      refs: { setFloating: vi.fn() },
      isPortalDisabled: false,
      zIndex: 1000,
      open: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- mocking props
      getFloatingProps: vi.fn((props) => props),
    };
    (useDialogContext as Mock).mockReturnValue(mockContext);
    (useMergeRefs as Mock).mockReturnValue(vi.fn());
    (useTransitionStatus as Mock).mockReturnValue(vi.fn());

    const { result } = renderHook(() =>
      useDialogBody({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });
});
