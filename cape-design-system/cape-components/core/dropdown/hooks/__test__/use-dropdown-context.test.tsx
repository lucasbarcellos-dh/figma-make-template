import type { FC, ReactNode } from 'react';
import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { useDropdownContext, DropdownContext } from '../use-dropdown-context';
import type { DropdownContextType } from '../use-dropdown-context';

describe('useDropdownContext', () => {
  it('throws an error when context is null', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
    try {
      renderHook(() => useDropdownContext());
    } catch (e) {
      expect(e).toEqual(new Error('Context is null'));
    }
  });

  it('returns context value when context is provided', () => {
    const contextValue: DropdownContextType = {
      open: true,
      trigger: 'select',
      disabled: true,
      openDropdown: () => vi.fn(),
      closeDropdown: () => vi.fn(),
      toggleDropdown: () => vi.fn(),
      setTrigger: () => vi.fn(),
    };

    const wrapper: FC<{ children: ReactNode }> = ({ children }) => (
      <DropdownContext.Provider value={contextValue}>
        {children}
      </DropdownContext.Provider>
    );

    const { result } = renderHook(() => useDropdownContext(), { wrapper });
    expect(result.current).toBe(contextValue);
  });
});
