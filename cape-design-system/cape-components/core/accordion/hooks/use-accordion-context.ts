import { createContext, useContext } from 'react';
import type { AccordionContextProps } from './type';

const NAME = `AccordionProvider`;

export const AccordionContext = createContext<AccordionContextProps | null>(
  null,
);

export const useAccordionContext = (): AccordionContextProps => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('Accordion Item must bre wrapped in <Accordion />');
  }

  return context;
};

AccordionContext.displayName = NAME;
