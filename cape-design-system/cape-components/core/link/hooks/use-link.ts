import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../link.module.scss';
import type { LinkProps } from '../type';

type UseLinkProps = LinkProps;

export interface UseLinkReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useLink = ({
  className = '',
  ...restProps
}: UseLinkProps): UseLinkReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    ...restProps,
  },
});
