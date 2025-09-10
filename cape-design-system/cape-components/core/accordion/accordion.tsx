import { forwardRef, useState } from 'react';
import type { AccordionProps } from './type';
import { AccordionContext } from './hooks/use-accordion-context';
import { useAccordion } from './hooks/use-accordion';

const NAME = 'Accordion';
/**
 * Accordion allows the user to focus on one piece of a content and avoid distraction while keeping the rest hidden.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/160b3e-accordion
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      children,
      type = 'single',
      onValueChange,
      value = [],
      size = 'small',
      standalone = true,
      ...rest
    },
    ref,
  ) => {
    const { rootProps } = useAccordion({
      ...rest,
    });

    const [openedItems, setOpenedItems] = useState<string[]>(
      Array.isArray(value) ? value : [value],
    );

    const toggleItem = (newVal: string, open: boolean): string[] => {
      if (open && openedItems.includes(newVal)) return openedItems;

      if (open) {
        return type === 'multiple' ? [...openedItems, newVal] : [newVal];
      }

      return openedItems.filter((val) => val !== newVal);
    };

    const onToggleItem = (itemValue: string, open: boolean): void => {
      const values = toggleItem(itemValue, open);

      setOpenedItems(values);
      onValueChange?.(values);
    };

    return (
      <AccordionContext.Provider
        value={{
          size,
          standalone,
          onToggleItem,
          openedItems,
        }}
      >
        <div role="group" {...rootProps} ref={ref}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);

Accordion.displayName = NAME;
