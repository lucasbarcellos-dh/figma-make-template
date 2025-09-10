import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useStepper } from '../use-stepper';

describe('useStepper', () => {
  it('returns correct size prop', () => {
    const { result } = renderHook(() => useStepper({ size: 'small' }));

    expect(result.current.rootProps['data-size']).toBe('small');
  });

  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useStepper({ className: 'custom-class' }),
    );

    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('returns correct `style` prop', () => {
    const { result } = renderHook(() =>
      useStepper({ style: { width: '100px' } }),
    );

    expect(result.current.rootProps.style?.width).toBe('100px');
  });
});
