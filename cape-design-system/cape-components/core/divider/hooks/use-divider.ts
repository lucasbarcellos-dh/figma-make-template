import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../divider.module.scss';
import type { DividerProps } from '../type';

type UseDividerProps = DividerProps;

interface UseDividerReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'aria-orientation': UseDividerProps['orientation'];
    'data-orientation': UseDividerProps['orientation'];
    'data-size': UseDividerProps['size'];
    'data-variant': UseDividerProps['variant'];
  };
}

export const useDivider = ({
  className = '',
  orientation,
  size,
  variant,
  ...restProps
}: UseDividerProps): UseDividerReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'aria-orientation': orientation,
      'data-orientation': orientation,
      'data-size': size,
      'data-variant': variant,
      ...restProps,
    },
  };
};
