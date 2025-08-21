import * as React from 'react';
import type { TextAreaProps } from '../type';

export type TextAreaContextType = Pick<
  TextAreaProps,
  'disabled' | 'size' | 'required' | 'readOnly'
>;

export const TextAreaContext = React.createContext<TextAreaContextType | null>(
  null,
);

export const useTextAreaContext = (): TextAreaContextType => {
  const context = React.useContext(TextAreaContext);

  if (!context) {
    throw new Error('Context is null');
  }

  return context;
};
