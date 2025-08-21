import type { CSSProperties } from 'react';
import { sanitizeCustomProperties, omitStyleProps } from '../../common/utils';
import styles from '../box.module.scss';
import type { BoxProps } from '../type';
import {
  useCombinedClassName,
  useMarginProps,
  usePaddingProps,
  useFlexProps,
  useWidthProps,
  useBackgroundProps,
  useColorProps,
  useCSSBoxProps,
  useHeightProps,
  usePositionProps,
  useWritingModeProps,
  useBorderProps,
  useOpacityProps,
} from '../../common/hooks';

type UseBoxProps = BoxProps;

interface UseBoxReturnType {
  rootProps?: {
    className?: string;
    style?: React.CSSProperties;
  };
  as: React.ElementType;
}

export const useBox = ({
  className = '',
  as = 'div',
  style,
  display,
  ...restProps
}: UseBoxProps): UseBoxReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.basic,
      overrideClassName: className,
    }),
    style: sanitizeCustomProperties({
      display,
      ...useMarginProps(restProps),
      ...usePaddingProps(restProps),
      ...useFlexProps(restProps),
      ...useWidthProps(restProps),
      ...useBackgroundProps(restProps),
      ...useColorProps(restProps),
      ...useCSSBoxProps(restProps),
      ...useHeightProps(restProps),
      ...usePositionProps(restProps),
      ...useWritingModeProps(restProps),
      ...useBorderProps(restProps),
      ...useOpacityProps(restProps),
      ...style,
    }),
    ...omitStyleProps(restProps as CSSProperties),
  },
  as,
});
