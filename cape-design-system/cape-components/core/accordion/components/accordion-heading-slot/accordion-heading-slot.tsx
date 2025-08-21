import { forwardRef } from 'react';
import styles from '../../accordion.module.scss';
import type { AccordionHeadingSlotProps } from './type';

const NAME = 'AccordionHeadingSlot';

export const AccordionHeadingSlot = forwardRef<
  HTMLDivElement,
  AccordionHeadingSlotProps
>(({ children, ...rest }, ref) => {
  return (
    <div className={styles.slot} {...rest} ref={ref}>
      {children}
    </div>
  );
});

AccordionHeadingSlot.displayName = NAME;
