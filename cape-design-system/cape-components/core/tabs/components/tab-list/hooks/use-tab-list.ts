import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import {
  sanitizeCustomProperties,
  omitStyleProps,
} from '../../../../common/utils';
import styles from '../../../tabs.module.scss';
import type { TabListProps } from '../type';

interface UseTabListReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    role: string;
  };
  containerClassname: string | undefined;
  indicatorClassname: string | undefined;
}

export const useTabList = ({
  className = '',
  style,
  ...restProps
}: TabListProps): UseTabListReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.list,
      overrideClassName: className,
    }),
    style: sanitizeCustomProperties({
      ...style,
    }),
    role: 'tablist',
    ...omitStyleProps(restProps as CSSProperties),
  },
  containerClassname: styles['list-container'],
  indicatorClassname: styles.indicator,
});
