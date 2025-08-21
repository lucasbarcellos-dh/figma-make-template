import { createContext, useContext } from 'react';

export interface PaginationContextType {
  count: number;
  current: number;
  isLast: boolean;
  isFirst: boolean;
  onChange?: (value: number) => void;
}

export const PaginationContext = createContext<PaginationContextType | null>(
  null,
);

export const usePaginationContext = (): PaginationContextType => {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error('Context is null');
  }

  return context;
};
