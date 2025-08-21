import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../search.module.scss';
import type { SearchProps } from '../type';

interface UseSearchReturnType {
  className?: string;
  style?: CSSProperties;
}

export const useSearch = ({
  className,
  ...restProps
}: SearchProps): UseSearchReturnType => {
  return {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    ...restProps,
  };
};
