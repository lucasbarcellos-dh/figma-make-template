import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTextArea } from '../use-text-area';

describe('useTextArea', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTextArea({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns data-size attribute based on the the size prop', () => {
    const { result } = renderHook(() => useTextArea({ size: 'xsmall' }));

    expect(result.current.rootProps['data-size']).toEqual('xsmall');
  });

  it('returns data-disabled attribute based on the the disabled prop', () => {
    const { result } = renderHook(() => useTextArea({ disabled: true }));

    expect(result.current.rootProps['data-disabled']).toEqual(true);
  });
});
