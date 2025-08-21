import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../dialog-footer.module.scss';
import type { DialogFooterProps } from '../type';

interface UseDialogFooterReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useDialogFooter = ({
  className = '',
  ...restProps
}: DialogFooterProps): UseDialogFooterReturnType => {
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
