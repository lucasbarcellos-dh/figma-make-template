import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import type { TagProps } from '../type';
import styles from '../tag.module.scss';

interface UseTagReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-status': TagProps['status'];
    'data-size': TagProps['size'];
  };
  labelProps: {
    className?: string;
  };
  iconProps: {
    className?: string;
    startIcon: TagProps['startIcon'];
    endIcon: TagProps['endIcon'];
  };
}

export const useTag = ({
  className = '',
  status,
  size,
  startIcon,
  endIcon,
  ...restProps
}: TagProps): UseTagReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-status': status,
      'data-size': size,
      ...restProps,
    },
    labelProps: {
      className: useCombinedClassName({
        className: styles.label,
      }),
    },
    iconProps: {
      className: useCombinedClassName({
        className: styles.icon,
      }),
      startIcon,
      endIcon,
    },
  };
};
