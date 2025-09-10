import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useStickyElement } from './use-sticky-element';

describe('useStickyElement', () => {
  it('returns stuck position and a stickyElementRef', () => {
    const { result } = renderHook(() => useStickyElement(true));

    expect(result.current.stuck).toBe(false);
    expect(result.current.stickyElementRef.current).toBe(null);
  });
});
