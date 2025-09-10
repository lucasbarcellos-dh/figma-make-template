import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { OpacityProps } from './type';

export const useOpacityProps = (props: OpacityProps): CSSProperties => {
  const styles: CSSProperties = {};

  styles.opacity = resolveCssValue<CSSProperties['opacity']>({
    property: 'opacity',
    value: props.opacity,
  });

  return styles;
};
