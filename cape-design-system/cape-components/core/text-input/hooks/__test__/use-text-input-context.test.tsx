import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import React from 'react';
import {
  useTextInputContext,
  TextInputContext,
  type TextInputContextType,
} from '../use-text-input-context';

describe('useTextInputContext', () => {
  it('throws an error when context is null', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
    try {
      renderHook(() => useTextInputContext());
    } catch (e) {
      expect(e).toEqual(new Error('Context is null'));
    }
  });

  it('returns context value when context is provided', () => {
    const contextValue: TextInputContextType = {
      disabled: true,
      size: 'large',
      required: false,
      readOnly: true,
    };
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <TextInputContext.Provider value={contextValue}>
        {children}
      </TextInputContext.Provider>
    );

    const { result } = renderHook(() => useTextInputContext(), { wrapper });
    expect(result.current).toBe(contextValue);
  });
});
