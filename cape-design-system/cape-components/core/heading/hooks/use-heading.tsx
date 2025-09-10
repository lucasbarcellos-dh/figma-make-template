import type { CSSProperties } from 'react';
import { useColorProps, useCombinedClassName } from '../../common/hooks';
import { sanitizeCustomProperties } from '../../common/utils';
import type { HeadingProps } from '../type';
import styles from '../heading.module.scss';

interface UseHeadingReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-color'?: HeadingProps['color'];
    'data-variant'?: string;
  };
}

export const useHeading = ({
  className = '',
  style,
  color,
  variant,
  ...restProps
}: HeadingProps): UseHeadingReturnType => {
  const colorProps = useColorProps({ color });

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      style: sanitizeCustomProperties({
        color: colorProps.color,
        ...style,
      }),
      ...restProps,
      'data-color': color,
      'data-variant': variant || undefined,
    },
  };
};
