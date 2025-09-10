import { forwardRef } from 'react';
import { Typography } from '../../../typography';
import styles from '../../accordion.module.scss';
import { useCombinedClassName } from '../../../common/hooks';
import type { AccordionHeadingProps } from './type';

const NAME = 'AccordionHeading';

export const AccordionHeading = forwardRef<HTMLElement, AccordionHeadingProps>(
  ({ as = 'h3', children, className, ...rest }, ref) => {
    const classNames = useCombinedClassName({
      className: styles.heading,
      overrideClassName: className,
    });

    return (
      <Typography
        as={as}
        ref={ref}
        variant="displayMedium"
        {...rest}
        className={classNames}
      >
        {children}
      </Typography>
    );
  },
);

AccordionHeading.displayName = NAME;
