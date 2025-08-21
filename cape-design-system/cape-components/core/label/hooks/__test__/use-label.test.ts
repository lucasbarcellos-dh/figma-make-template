import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useLabel } from '../use-label';

describe('useLabel', () => {
  const sizes = ['xsmall', 'small', 'medium', 'large'] as const;
  it.each(sizes)('returns provided %s variant prop', (size) => {
    const { result } = renderHook(() => useLabel({ size }));
    expect(sizes).toContain(size);
    expect(result.current['data-size']).toBe(size);
  });

  it('returns htmlFor', () => {
    const { result } = renderHook(() =>
      useLabel({ htmlFor: 'input-element-id' }),
    );
    expect(result.current.htmlFor).toContain('input-element-id');
  });

  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useLabel({ className: 'custom-class' }),
    );
    expect(result.current.className).toContain('custom-class');
  });

  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useLabel({ className: 'custom-class' }),
    );
    expect(result.current.className).toContain('custom-class');
  });

  it('returns disabled', () => {
    const { result } = renderHook(() => useLabel({ disabled: true }));
    expect(result.current.disabled).toBe(true);
  });
});
