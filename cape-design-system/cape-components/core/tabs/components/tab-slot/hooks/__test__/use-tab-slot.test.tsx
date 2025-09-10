import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useTabSlot } from '../use-tab-slot';

describe('useTabSlot', () => {
  it('returns combined className', () => {
    const { result } = renderHook(() =>
      useTabSlot({ className: 'custom-class' }),
    );
    expect(result.current.rootProps.className).toContain('custom-class');
  });
});
