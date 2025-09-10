import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../card.module.scss';
import type { CardBodyProps } from '../type';

interface UseCardBodyReturnType {
  rootProps: {
    className?: string;
  };
}

export const useCardBody = ({
  className = '',
  ...restProps
}: CardBodyProps): UseCardBodyReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.body,
        overrideClassName: className,
      }),
      ...restProps,
    },
  };
};
