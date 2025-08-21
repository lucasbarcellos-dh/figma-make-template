import { type CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import type { TabsProps } from '../type';
import styles from '../tabs.module.scss';

interface UseTabsReturnType {
  className?: string;
  'data-size'?: TabsProps['size'];
  style?: CSSProperties;
  'data-divider': TabsProps['divider'];
}

export const useTabs = ({
  className = '',
  size,
  divider,
  ...restProps
}: TabsProps): UseTabsReturnType => {
  return {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    'data-size': size,
    'data-divider': !divider ? false : undefined,
    ...restProps,
  };
};
