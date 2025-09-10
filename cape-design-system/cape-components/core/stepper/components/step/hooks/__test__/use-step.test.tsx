import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useStep } from '../use-step';

describe('useStep', () => {
  it('returns custom values when props provided', () => {
    const { result } = renderHook(() => useStep({ className: 'custom-class' }));

    expect(result.current.rootProps.className).toContain('custom-class');
  });

  it('return correct `style` prop', () => {
    const { result } = renderHook(() => useStep({ style: { width: '100px' } }));

    expect(result.current.rootProps.style?.width).toBe('100px');
  });
});
