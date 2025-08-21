import type { CSSProperties, MouseEventHandler } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../drawer.module.scss';
import type { DrawerCloseButtonProps, DrawerHeaderProps } from '../type';
import { useDrawerContext } from '../../../hooks/use-drawer-context';

interface UseDrawerHeaderReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
  // TODO: remove this in v2 - deprecated
  closeButtonProps: {
    onClick: () => void;
  };
}

interface UseDrawerCloseButtonReturnType {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const useDrawerHeader = ({
  className = '',
  ...restProps
}: DrawerHeaderProps): UseDrawerHeaderReturnType => {
  const { setOpen } = useDrawerContext();

  return {
    rootProps: {
      ...restProps,
      className: useCombinedClassName({
        className: styles.header,
        overrideClassName: className,
      }),
    },
    // TODO: remove this in v2 - deprecated
    closeButtonProps: {
      onClick: () => {
        setOpen(false);
      },
    },
  };
};

export const useDrawerCloseButton = ({
  ...restProps
}: DrawerCloseButtonProps): UseDrawerCloseButtonReturnType => {
  const { setOpen } = useDrawerContext();

  return {
    onClick: () => {
      setOpen(false);
    },
    ...restProps,
  };
};
