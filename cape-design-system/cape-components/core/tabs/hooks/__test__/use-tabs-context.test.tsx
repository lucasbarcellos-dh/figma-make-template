import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import React from 'react';
import { useTabsContext } from '../use-tabs-context';
import type { TabsContextProps } from '../../context';
import { TabsContext } from '../../context';

const contextValue: TabsContextProps = {
  active: 'active-tab',
  setActive: vi.fn(),
  onChange: vi.fn(),
  tabsRef: { current: new Map() },
};
const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
);

describe('useTabsContext', () => {
  it('throws an error when context is null', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
    try {
      renderHook(() => useTabsContext());
    } catch (e) {
      expect(e).toEqual(
        new Error(
          'Tabs context is not available, supplied component could be out of context provider!',
        ),
      );
    }
  });

  it('returns context value when context is provided', () => {
    const { result } = renderHook(() => useTabsContext(), { wrapper });

    expect(result.current).toBe(contextValue);
  });

  it('sets default activeTab correctly when no setActive is called', () => {
    const { result } = renderHook(() => useTabsContext(), { wrapper });
    result.current.setActive('active-tab');
    expect(result.current.active).toBe('active-tab');
  });
});
