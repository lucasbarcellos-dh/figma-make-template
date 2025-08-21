import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTextInput } from '../use-text-input';

describe('useTextInput', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTextInput({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns data-size attribute based on the the size prop', () => {
    const { result } = renderHook(() => useTextInput({ size: 'xsmall' }));

    expect(result.current.rootProps['data-size']).toEqual('xsmall');
  });

  it('returns data-disabled attribute based on the the isDisabled prop', () => {
    const { result } = renderHook(() => useTextInput({ disabled: true }));

    expect(result.current.rootProps['data-disabled']).toEqual(true);
  });
});
