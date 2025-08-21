import { createContext, useContext } from 'react';
import type { QuantitySelectorProps } from '../type';

export interface QuantitySelectorContextType {
  size: NonNullable<QuantitySelectorProps['size']>;
}

export const QuantitySelectorContext =
  createContext<QuantitySelectorContextType | null>(null);

export const useQuantitySelectorContext = (): QuantitySelectorContextType => {
  const context = useContext(QuantitySelectorContext);

  if (!context) {
    throw new Error('Context is null');
  }

  return context;
};
