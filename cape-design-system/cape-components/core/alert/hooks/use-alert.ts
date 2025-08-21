import {
  type CSSProperties,
  type AriaRole,
  type SyntheticEvent,
  isValidElement,
} from 'react';
import { useCombinedClassName } from '../../common/hooks';
import type { AlertProps } from '../type';
import styles from '../alert.module.scss';
import { defaultIconMapping } from './utils';

interface UseAlertReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-variant': AlertProps['variant'];
    role: AriaRole;
  };
  contentWrapperProps: {
    className?: string;
  };
  contentProps: {
    className?: string;
  };
  iconProps: {
    className?: string;
  };
  alertAction: AlertProps['action'];
  iconElement: AlertProps['icon'];
  closeIconProps: {
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    'aria-label'?: string;
  };
}
const getAlertIcon = (
  icon: AlertProps['icon'],
  variant: AlertProps['variant'] = 'branded',
) => {
  if (icon === false) {
    return null;
  }
  if (isValidElement(icon)) {
    return icon;
  }
  return defaultIconMapping[variant];
};

export const useAlert = ({
  className = '',
  variant,
  icon,
  role = 'alert',
  onClose,
  action,
  closeButtonLabel,
  ...restProps
}: AlertProps): UseAlertReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-variant': variant,
      role,
      ...restProps,
    },
    contentWrapperProps: {
      className: styles['content-wrapper'],
    },
    contentProps: {
      className: styles.content,
    },
    iconProps: {
      className: styles.icon,
    },
    alertAction: action,
    iconElement: getAlertIcon(icon, variant),
    closeIconProps: {
      onClick: onClose,
      'aria-label': closeButtonLabel || 'Close',
    },
  };
};
