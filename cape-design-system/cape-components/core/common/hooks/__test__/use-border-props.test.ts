import { renderHook } from '@testing-library/react';
import { useBorderProps } from '../use-border-props';

describe('useBorderProps', () => {
  it('returns initial border styles', () => {
    const { result } = renderHook(() =>
      useBorderProps({ borderWidth: '1px', borderColor: 'black' }),
    );
    expect(result.current).toEqual({
      borderWidth: '1px',
      borderColor: 'black',
    });
  });

  it('handles borderRadius styles', () => {
    const { result } = renderHook(() =>
      useBorderProps({ borderRadius: '5px' }),
    );
    expect(result.current).toEqual({ borderRadius: '5px' });
  });
});
