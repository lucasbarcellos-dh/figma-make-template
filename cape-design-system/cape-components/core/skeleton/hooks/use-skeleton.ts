import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../skeleton.module.scss';
import type { SkeletonProps } from '../type';

interface UseSkeletonReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-variant': SkeletonProps['variant'];
  };
}

export const useSkeleton = ({
  className = '',
  animated,
  variant,
  ...restProps
}: SkeletonProps): UseSkeletonReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: `${styles.root} ${animated ? styles.animated : ''}`,
      overrideClassName: className,
    }),
    'data-variant': variant,
    ...restProps,
  },
});
