import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useDropdown } from '../use-dropdown';

describe('useDropdown', () => {
  it('returns disabled prop', () => {
    const { result } = renderHook(() => useDropdown({ disabled: true }));
    expect(result.current.disabled).toBe(true);
  });
});
