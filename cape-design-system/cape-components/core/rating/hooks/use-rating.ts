import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../rating.module.scss';
import type { RatingProps } from '../type';

type UseRatingProps = RatingProps;

interface UseRatingReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-readonly'?: boolean;
  };
}

export const useRating = ({
  className = '',
  readOnly,
  ...restProps
}: UseRatingProps): UseRatingReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-readonly': readOnly || undefined,
      ...restProps,
    },
  };
};
