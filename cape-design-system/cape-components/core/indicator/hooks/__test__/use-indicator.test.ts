import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useIndicator } from '../use-indicator';
import type { IndicatorProps } from '../../type';

describe('useIndicator', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useIndicator({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns provided "role" prop', () => {
    const { result } = renderHook(() => useIndicator({ role: 'alert' }));
    expect(result.current.rootProps.role).toBe('alert');
  });

  it.each(['branded', 'neutral', 'error', 'warning', 'success'])(
    'returns provided %s status prop',
    (status) => {
      const { result } = renderHook(() =>
        useIndicator({ status: status as IndicatorProps['status'] }),
      );
      expect(result.current.rootProps['data-status']).toBe(status);
    },
  );

  it.each(['small', 'medium', 'large'])(
    'returns provided %s size prop',
    (size) => {
      const { result } = renderHook(() =>
        useIndicator({ size: size as IndicatorProps['size'] }),
      );
      expect(result.current.rootProps['data-size']).toBe(size);
    },
  );
});
