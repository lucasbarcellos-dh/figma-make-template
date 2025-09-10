import { renderHook } from '@testing-library/react';
import { usePositionProps } from '../use-position-props';

describe('usePositionProps', () => {
  it('returns initial position styles', () => {
    const { result } = renderHook(() =>
      usePositionProps({ position: 'absolute', top: '10px' }),
    );
    expect(result.current).toEqual({ position: 'absolute', top: '10px' });
  });

  it('handles multiple position styles', () => {
    const { result } = renderHook(() =>
      usePositionProps({ position: 'fixed', bottom: '20px', right: '20px' }),
    );
    expect(result.current).toEqual({
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    });
  });
});
