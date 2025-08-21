import { renderHook } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import React from 'react';
import {
  useQuantitySelectorContext,
  QuantitySelectorContext,
  type QuantitySelectorContextType,
} from '../use-quantity-selector-context';

describe('useQuantitySelectorContext', () => {
  it('throws an error when context is null', () => {
    vi.spyOn(console, 'error').mockImplementation(() => vi.fn());
    try {
      renderHook(() => useQuantitySelectorContext());
    } catch (e) {
      expect(e).toEqual(new Error('Context is null'));
    }
  });

  it('returns context value when context is provided', () => {
    const contextValue: QuantitySelectorContextType = {
      size: 'large',
    };
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <QuantitySelectorContext.Provider value={contextValue}>
        {children}
      </QuantitySelectorContext.Provider>
    );

    const { result } = renderHook(() => useQuantitySelectorContext(), {
      wrapper,
    });
    expect(result.current).toBe(contextValue);
  });
});
