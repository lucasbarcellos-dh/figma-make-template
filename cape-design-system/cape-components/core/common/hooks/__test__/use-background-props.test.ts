import { renderHook } from '@testing-library/react';
import { useBackgroundProps } from '../use-background-props';

describe('useBackgroundProps', () => {
  it('returns initial background styles', () => {
    const { result } = renderHook(() =>
      useBackgroundProps({ background: 'red' }),
    );
    expect(result.current).toEqual({ background: 'red' });
  });

  it('returns initial backgroundColor styles', () => {
    const { result } = renderHook(() =>
      useBackgroundProps({ backgroundColor: '#fff' }),
    );
    expect(result.current).toEqual({ backgroundColor: '#fff' });
  });
});
