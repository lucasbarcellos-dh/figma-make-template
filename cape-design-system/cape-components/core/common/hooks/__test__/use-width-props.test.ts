import { renderHook } from '@testing-library/react';
import { useWidthProps } from '../use-width-props';

describe('useWidthProps', () => {
  it('returns correct styles for inlineSize', () => {
    const { result } = renderHook(() => useWidthProps({ inlineSize: '100px' }));
    expect(result.current).toEqual({
      inlineSize: '100px',
    });
  });

  it('returns correct styles for width', () => {
    const { result } = renderHook(() => useWidthProps({ width: '200px' }));
    expect(result.current).toEqual({
      width: '200px',
    });
  });
});
