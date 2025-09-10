import { renderHook } from '@testing-library/react';
import { useHeightProps } from '../use-height-props';

describe('useHeightProps', () => {
  it('returns initial height styles', () => {
    const { result } = renderHook(() => useHeightProps({ height: '100px' }));
    expect(result.current).toEqual({ height: '100px' });
  });

  it('returns initial minHeight styles', () => {
    const { result } = renderHook(() => useHeightProps({ minHeight: '50px' }));
    expect(result.current).toEqual({ minHeight: '50px' });
  });
});
