import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import React from 'react';
import {
  useDatePickerContext,
  DatePickerContext,
  type DatePickerContextType,
} from '../use-date-picker-context';

describe('useDatePickerContext', () => {
  it('throws an error when context is null', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
    try {
      renderHook(() => useDatePickerContext());
    } catch (e) {
      expect(e).toEqual(new Error('Context is null'));
    }
  });

  it('returns context value when context is provided', () => {
    const contextValue: DatePickerContextType = {
      mode: 'single',
    };
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <DatePickerContext.Provider value={contextValue}>
        {children}
      </DatePickerContext.Provider>
    );

    const { result } = renderHook(() => useDatePickerContext(), { wrapper });
    expect(result.current).toBe(contextValue);
  });
});
