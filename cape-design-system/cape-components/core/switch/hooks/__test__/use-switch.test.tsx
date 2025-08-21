import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useSwitch } from '../use-switch';

describe('useSwitch', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useSwitch({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('should forward system props', () => {
    const { result } = renderHook(() =>
      useSwitch({ style: { margin: '10px' } }),
    );
    expect(result.current.rootProps.style).toMatchObject({
      margin: '10px',
    });
  });
});
