import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import React from 'react';
import {
  useTextAreaContext,
  TextAreaContext,
  type TextAreaContextType,
} from '../use-text-area-context';

describe('useTextAreaContext', () => {
  it('throws an error when context is null', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
    try {
      renderHook(() => useTextAreaContext());
    } catch (e) {
      expect(e).toEqual(new Error('Context is null'));
    }
  });

  it('returns context value when context is provided', () => {
    const contextValue: TextAreaContextType = {
      disabled: true,
      size: 'large',
      required: false,
      readOnly: true,
    };
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <TextAreaContext.Provider value={contextValue}>
        {children}
      </TextAreaContext.Provider>
    );

    const { result } = renderHook(() => useTextAreaContext(), { wrapper });
    expect(result.current).toBe(contextValue);
  });
});
