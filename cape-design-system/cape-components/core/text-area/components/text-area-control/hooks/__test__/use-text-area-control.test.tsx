import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi, type Mock } from 'vitest';
import { useTextAreaControl } from '../use-text-area-control';
import { useTextAreaContext } from '../../../../hooks/use-text-area-context';

vi.mock('../../../../hooks/use-text-area-context', () => ({
  useTextAreaContext: vi.fn(),
}));

describe('useTextAreaControl', () => {
  const mockContext = {
    disabled: true,
    size: 'medium',
    required: true,
    readOnly: true,
  };
  (useTextAreaContext as Mock).mockReturnValue(mockContext);

  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTextAreaControl({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns data-disabled attribute based on the the disabled property of the context', () => {
    const { result } = renderHook(() => useTextAreaControl({}));

    expect(result.current.rootProps['data-disabled']).toEqual(true);
  });

  it('returns required, readOnly and disabled attributes of the HTMLAreaElement based on the the given context', () => {
    const { result } = renderHook(() => useTextAreaControl({}));

    expect(result.current.rootProps.disabled).toEqual(true);
    expect(result.current.rootProps.readOnly).toEqual(true);
    expect(result.current.rootProps.required).toEqual(true);
  });
});
