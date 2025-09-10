import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { ColorProps } from './type';

export const useColorProps = (props: ColorProps): CSSProperties => {
  const styles: CSSProperties = {};

  styles.color = resolveCssValue<CSSProperties['color']>({
    property: 'color',
    value: props.color,
  });

  return styles;
};
