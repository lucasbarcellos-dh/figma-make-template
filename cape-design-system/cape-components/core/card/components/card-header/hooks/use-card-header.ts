import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../card.module.scss';
import type { CardHeaderProps } from '../type';

interface UseCardHeaderReturnType {
  rootProps: {
    className?: string;
  };
}

export const useCardHeader = ({
  className = '',
  ...restProps
}: CardHeaderProps): UseCardHeaderReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.header,
        overrideClassName: className,
      }),
      ...restProps,
    },
  };
};
