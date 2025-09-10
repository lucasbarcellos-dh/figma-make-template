import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../accordion.module.scss';
import type { AccordionBodyProps } from './type';

const NAME = 'AccordionBody';

export const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ children, className }, ref) => {
    const classNames = useCombinedClassName({
      className: styles.body,
      overrideClassName: className,
    });

    return (
      <div className={classNames} ref={ref}>
        {children}
      </div>
    );
  },
);

AccordionBody.displayName = NAME;
