import { createContext, useContext } from 'react';

export interface DatePickerContextType {
  mode?: 'single' | 'multiple' | 'range';
}

export const DatePickerContext = createContext<DatePickerContextType | null>(
  null,
);

export const useDatePickerContext = (): DatePickerContextType => {
  const context = useContext(DatePickerContext);

  if (!context) {
    throw new Error('Context is null');
  }

  return context;
};
