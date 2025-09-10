import { type CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import { resolveCssValue } from '../../common/utils';
import type { StackProps } from '../type';
import styles from '../stack.module.scss';

type UseStackProps = StackProps;

interface UseStackReturnType {
  rootProps?: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useStack = ({
  className = '',
  spacing,
  direction,
  style,
  ...restProps
}: UseStackProps): UseStackReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    style: {
      '--cp-stack-direction': resolveCssValue({
        property: 'flexDirection',
        value: direction,
      }),
      '--cp-stack-gap': resolveCssValue({ property: 'gap', value: spacing }),
      ...style,
    } as CSSProperties,
    ...restProps,
  },
});
