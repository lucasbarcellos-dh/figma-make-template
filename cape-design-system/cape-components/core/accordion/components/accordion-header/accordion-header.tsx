import { forwardRef } from 'react';
import { ChevronDownMiniIcon } from '@deliveryhero/cape-icons';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../accordion.module.scss';
import type { AccordionHeaderProps } from './type';

const NAME = 'AccordionHeader';

export const AccordionHeader = forwardRef<HTMLElement, AccordionHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const classNames = useCombinedClassName({
      className: styles.header,
      overrideClassName: className,
    });

    return (
      <summary ref={ref} {...rest}>
        <div className={classNames}>
          <div className={styles.container}>{children}</div>
          <ChevronDownMiniIcon
            className={`${styles.chevron} cp-accordion-chevron`}
            role="presentation"
          />
        </div>
      </summary>
    );
  },
);

AccordionHeader.displayName = NAME;
