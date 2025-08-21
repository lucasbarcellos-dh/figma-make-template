import { renderHook } from '@testing-library/react';
import { useWritingModeProps } from '../use-writing-mode-props';

describe('useWritingModeProps', () => {
  it('returns initial writingMode styles', () => {
    const { result } = renderHook(() =>
      useWritingModeProps({ writingMode: 'vertical-lr' }),
    );
    expect(result.current).toEqual({ writingMode: 'vertical-lr' });
  });

  it('handles undefined writingMode', () => {
    const { result } = renderHook(() => useWritingModeProps({}));
    expect(result.current).toEqual({});
  });
});
