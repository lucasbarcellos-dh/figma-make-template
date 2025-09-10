import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../icon-button.module.scss';
import type { IconButtonProps } from '../type';

interface UseIconButtonReturnType {
  rootProps: {
    'data-size': IconButtonProps['size'];
    'data-outline': IconButtonProps['outline'];
    'data-variant': IconButtonProps['variant'];
    'data-status': IconButtonProps['status'];
    disabled: IconButtonProps['disabled'];
    className?: string;
    style?: CSSProperties;
    type?: IconButtonProps['type'];
  };
  contentProps: {
    'data-size': IconButtonProps['size'];
    'data-variant': IconButtonProps['variant'];
    disabled: IconButtonProps['disabled'];
    className?: string;
    'aria-hidden': boolean;
  };
}

export const useIconButton = ({
  className = '',
  outline,
  variant,
  status,
  size,
  disabled,
  ...restProps
}: IconButtonProps): UseIconButtonReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    'data-size': size,
    'data-outline': outline,
    'data-variant': outline ? 'secondary' : variant,
    'data-status': status,
    disabled,
    ...restProps,
  },
  contentProps: {
    className: styles.content,
    'data-size': size,
    'data-variant': variant,
    disabled,
    'aria-hidden': true,
  },
});
