import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../card.module.scss';
import type { CardFooterProps } from '../type';

interface UseCardFooterReturnType {
  rootProps: {
    className?: string;
  };
}

export const useCardFooter = ({
  className = '',
  ...restProps
}: CardFooterProps): UseCardFooterReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.footer,
        overrideClassName: className,
      }),
      ...restProps,
    },
  };
};
