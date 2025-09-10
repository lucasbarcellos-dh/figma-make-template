import type { CSSProperties } from 'react';
import { useColorProps, useCombinedClassName } from '../../common/hooks';
import type { TypographyProps } from '../type';
import styles from '../typography.module.scss';
import { sanitizeCustomProperties } from '../../common/utils';

interface UseTypographyReturnType {
  as: TypographyProps['as'];
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-color'?: TypographyProps['color'];
    'data-variant': TypographyProps['variant'];
  };
}

export const useTypography = ({
  className = '',
  style,
  as,
  variant,
  textAlign,
  ...restProps
}: TypographyProps): UseTypographyReturnType => {
  const colorProps = useColorProps(restProps);

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      style: sanitizeCustomProperties({
        color: colorProps.color,
        textAlign,
        ...style,
      }),
      ...restProps,
      'data-color': restProps.color,
      'data-variant': variant,
    },
    as,
  };
};
