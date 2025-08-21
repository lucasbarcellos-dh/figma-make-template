import { createContext, useContext } from 'react';
import type { TextInputProps } from '../type';

export type TextInputContextType = Pick<
  TextInputProps,
  'disabled' | 'size' | 'required' | 'readOnly'
>;

export const TextInputContext = createContext<TextInputContextType | null>(
  null,
);

export const useTextInputContext = (): TextInputContextType => {
  const context = useContext(TextInputContext);

  if (!context) {
    throw new Error('Context is null');
  }

  return context;
};
