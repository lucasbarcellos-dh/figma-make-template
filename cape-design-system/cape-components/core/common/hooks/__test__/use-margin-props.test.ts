import { renderHook } from '@testing-library/react';
import { useMarginProps } from '../use-margin-props';

describe('useMarginProps', () => {
  it('returns correct styles for general margin', () => {
    const { result } = renderHook(() => useMarginProps({ margin: '10px' }));
    expect(result.current).toEqual({ margin: '10px' });
  });

  it('returns correct styles for specific margins', () => {
    const { result } = renderHook(() =>
      useMarginProps({
        marginTop: '10px',
        marginBottom: '20px',
        marginLeft: '30px',
        marginRight: '40px',
      }),
    );
    expect(result.current).toEqual({
      marginTop: '10px',
      marginBottom: '20px',
      marginLeft: '30px',
      marginRight: '40px',
    });
  });

  it('returns correct styles for logical margins', () => {
    const { result } = renderHook(() =>
      useMarginProps({ marginBlock: '10px', marginInline: '20px' }),
    );
    expect(result.current).toEqual({
      marginBlock: '10px',
      marginInline: '20px',
    });
  });
});
