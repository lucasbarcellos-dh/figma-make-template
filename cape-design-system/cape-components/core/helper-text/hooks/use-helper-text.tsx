import { type CSSProperties, type AriaRole } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import type { HelperTextProps } from '../type';
import styles from '../helper.text.module.scss';

interface UseHelperTextReturnType {
  rootProps: {
    'data-variant': HelperTextProps['variant'];
    'data-size': HelperTextProps['size'];
    className?: string;
    style?: CSSProperties;
    role: AriaRole;
  };
  textClassName?: string;
  iconClassName?: string;
}

export const useHelperText = ({
  className = '',
  variant,
  size,
  role = 'alert',
  ...restProps
}: HelperTextProps): UseHelperTextReturnType => {
  return {
    rootProps: {
      'data-variant': variant,
      'data-size': size,
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      role,
      ...restProps,
    },
    textClassName: styles.text,
    iconClassName: styles.icon,
  };
};
