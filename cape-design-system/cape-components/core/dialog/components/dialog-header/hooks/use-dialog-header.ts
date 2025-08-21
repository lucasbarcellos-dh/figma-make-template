import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../dialog-header.module.scss';
import type { DialogHeaderProps } from '../type';
import { useDialogContext } from '../../../hooks/use-dialog-context';

interface UseDialogHeaderReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
  closeButtonProps: {
    onClick: () => void;
  };
}

export const useDialogHeader = ({
  className = '',
  ...restProps
}: DialogHeaderProps): UseDialogHeaderReturnType => {
  const { setOpen } = useDialogContext();

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),

      ...restProps,
    },
    closeButtonProps: {
      onClick: () => {
        setOpen(false);
      },
    },
  };
};
