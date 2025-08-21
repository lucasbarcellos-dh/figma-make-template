import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi, type Mock } from 'vitest';
import { useTextInputControl } from '../use-text-input-control';
import { useTextInputContext } from '../../../../hooks/use-text-input-context';

vi.mock('../../../../hooks/use-text-input-context', () => ({
  useTextInputContext: vi.fn(),
}));

describe('useTextInputControl', () => {
  const mockContext = {
    disabled: true,
    size: 'medium',
    required: true,
    readOnly: true,
  };
  (useTextInputContext as Mock).mockReturnValue(mockContext);

  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTextInputControl({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns disabled if the input is disabled', () => {
    const { result } = renderHook(() => useTextInputControl({}));

    expect(result.current.rootProps.disabled).toEqual(true);
  });

  it('returns required, readOnly and disabled attributes of the HTMLInputElement based on the the given context', () => {
    const { result } = renderHook(() => useTextInputControl({}));

    expect(result.current.rootProps.disabled).toEqual(true);
    expect(result.current.rootProps.readOnly).toEqual(true);
    expect(result.current.rootProps.required).toEqual(true);
  });
});
