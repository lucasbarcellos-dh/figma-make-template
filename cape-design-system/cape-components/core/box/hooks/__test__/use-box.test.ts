import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useBox } from '../use-box';

describe('useBox', () => {
  it('returns default "as" prop as "div"', () => {
    const { result } = renderHook(() => useBox({}));
    expect(result.current.as).toBe('div');
  });

  it('returns provided "as" prop', () => {
    const { result } = renderHook(() => useBox({ as: 'section' }));
    expect(result.current.as).toBe('section');
  });

  it('returns combined className', () => {
    const { result } = renderHook(() => useBox({ className: 'custom-class' }));
    expect(result.current.rootProps?.className).toContain('custom-class');
  });

  it('returns sanitized system props as style', () => {
    const { result } = renderHook(() => useBox({ margin: '10px' }));
    expect(result.current.rootProps?.style).toEqual({ margin: '10px' });
  });
});
