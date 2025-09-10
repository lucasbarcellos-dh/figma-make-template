import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import { omitStyleProps } from '../../common/utils';
import styles from '../list.module.scss';
import type { ListProps } from '../type';

type UseListProps = ListProps;

interface UseListReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
  listContextProps: {
    size?: UseListProps['size'];
    divider?: UseListProps['divider'];
  };
}

export const useList = ({
  className = '',
  divider,
  size,
  style,
  ...restProps
}: UseListProps): UseListReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    style,
    ...omitStyleProps(restProps as CSSProperties),
  },
  listContextProps: {
    divider,
    size,
  },
});
