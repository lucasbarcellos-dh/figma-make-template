import { createContext, useContext } from 'react';

export interface SegmentedControlContextType {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const SegmentedControlContext =
  createContext<SegmentedControlContextType | null>(null);

export const useSegmentedControlContext = (): SegmentedControlContextType => {
  const context = useContext(SegmentedControlContext);

  if (!context) {
    throw new Error('Context is null');
  }

  return context;
};
