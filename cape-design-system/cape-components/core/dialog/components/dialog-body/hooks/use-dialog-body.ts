import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../dialog-body.module.scss';
import type { DialogBodyProps } from '../type';

interface UseDialogBodyReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useDialogBody = ({
  className = '',
  ...restProps
}: DialogBodyProps): UseDialogBodyReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      ...restProps,
    },
  };
};
