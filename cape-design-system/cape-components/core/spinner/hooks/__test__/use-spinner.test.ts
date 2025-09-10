import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useSpinner } from '../use-spinner';

describe('useSpinner', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useSpinner({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should forward system props', () => {
    const { result } = renderHook(() =>
      useSpinner({ style: { margin: '10px' } }),
    );
    expect(result.current.rootProps.style).toMatchObject({
      margin: '10px',
    });
  });
});
