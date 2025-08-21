import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../accordion.module.scss';
import type { AccordionDescriptionProps } from './type';

const NAME = 'AccordionDescription';

export const AccordionDescription = forwardRef<
  HTMLParagraphElement,
  AccordionDescriptionProps
>(({ children, className, ...rest }, ref) => {
  const classNames = useCombinedClassName({
    className: styles.description,
    overrideClassName: className,
  });

  return (
    <p {...rest} className={classNames} ref={ref}>
      {children}
    </p>
  );
});

AccordionDescription.displayName = NAME;
