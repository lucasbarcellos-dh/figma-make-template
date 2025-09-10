import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../accordion.module.scss';
import type { AccordionProps } from '../type';

interface UseAccordionReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useAccordion = ({
  className = '',
  ...restProps
}: AccordionProps): UseAccordionReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    ...restProps,
  },
});
