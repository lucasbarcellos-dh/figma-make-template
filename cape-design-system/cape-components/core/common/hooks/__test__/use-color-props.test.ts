import { renderHook } from '@testing-library/react';
import { useColorProps } from '../use-color-props';

describe('useColorProp', () => {
  it('returns initial color styles', () => {
    const { result } = renderHook(() => useColorProps({ color: 'blue' }));
    expect(result.current).toEqual({ color: 'blue' });
  });

  it('handles undefined color', () => {
    const { result } = renderHook(() => useColorProps({}));
    expect(result.current).toEqual({});
  });
});
