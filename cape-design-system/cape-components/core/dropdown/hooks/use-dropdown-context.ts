import { createContext, useContext } from 'react';

export interface DropdownContextType {
  disabled: boolean;
  open: boolean;
  trigger?: string;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  setTrigger: (trigger: string) => void;
}

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdownContext = (): DropdownContextType => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('Context is null');
  }

  return context;
};
