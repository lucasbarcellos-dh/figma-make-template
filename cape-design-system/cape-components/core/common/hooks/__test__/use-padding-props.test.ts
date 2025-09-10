import { renderHook } from '@testing-library/react';
import { usePaddingProps } from '../use-padding-props';

describe('usePaddingProps', () => {
  it('returns correct styles for general padding', () => {
    const { result } = renderHook(() => usePaddingProps({ padding: '10px' }));
    expect(result.current).toEqual({
      padding: '10px',
    });
  });

  it('returns correct styles for specific paddings', () => {
    const { result } = renderHook(() =>
      usePaddingProps({
        paddingTop: '10px',
        paddingBottom: '20px',
        paddingLeft: '30px',
        paddingRight: '40px',
      }),
    );
    expect(result.current).toEqual({
      paddingTop: '10px',
      paddingBottom: '20px',
      paddingLeft: '30px',
      paddingRight: '40px',
    });
  });

  it('returns correct styles for logical paddings', () => {
    const { result } = renderHook(() =>
      usePaddingProps({ paddingBlock: '10px', paddingInline: '20px' }),
    );
    expect(result.current).toEqual({
      paddingBlock: '10px',
      paddingInline: '20px',
    });
  });
});
