import { renderHook } from '@testing-library/react';
import { useCSSBoxProps } from '../use-css-box-props';

describe('useCSSBoxProps', () => {
  it('returns initial boxShadow styles', () => {
    const { result } = renderHook(() =>
      useCSSBoxProps({ boxShadow: '10px 5px 5px black' }),
    );
    expect(result.current).toEqual({ boxShadow: '10px 5px 5px black' });
  });

  it('handles undefined boxShadow', () => {
    const { result } = renderHook(() => useCSSBoxProps({}));
    expect(result.current).toEqual({});
  });
});
