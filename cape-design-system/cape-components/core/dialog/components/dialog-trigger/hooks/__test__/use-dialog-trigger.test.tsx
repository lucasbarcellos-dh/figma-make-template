import { useMergeRefs } from '@floating-ui/react';
import { renderHook } from '@testing-library/react';
import type { Mock } from 'vitest';
import { expect, describe, it, vi } from 'vitest';
import { useDialogContext } from '../../../../hooks/use-dialog-context';
import { useDialogTrigger } from '../use-dialog-trigger';

vi.mock('../../../../hooks/use-dialog-context', () => ({
  useDialogContext: vi.fn(),
}));

vi.mock('@floating-ui/react', () => ({
  useMergeRefs: vi.fn(),
}));

describe('useDialogTrigger', () => {
  it('returns correct structure and default values with minimal valid input', () => {
    const mockContext = {
      refs: { setReference: vi.fn() },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- mocking props
      getReferenceProps: vi.fn((props) => props),
      open: false,
    };
    (useDialogContext as Mock).mockReturnValue(mockContext);
    (useMergeRefs as Mock).mockReturnValue(vi.fn());

    const { result } = renderHook(() =>
      useDialogTrigger({
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
});
