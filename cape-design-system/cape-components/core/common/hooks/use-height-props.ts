import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { HeightProps } from './type';

export const useHeightProps = (props: HeightProps): CSSProperties => {
  const styles: CSSProperties = {};

  // Handling height properties
  styles.height = resolveCssValue<CSSProperties['height']>({
    property: 'height',
    value: props.height,
  });
  styles.blockSize = resolveCssValue<CSSProperties['blockSize']>({
    property: 'blockSize',
    value: props.blockSize,
  });
  styles.minHeight = resolveCssValue<CSSProperties['minHeight']>({
    property: 'minHeight',
    value: props.minHeight,
  });
  styles.maxHeight = resolveCssValue<CSSProperties['maxHeight']>({
    property: 'maxHeight',
    value: props.maxHeight,
  });

  return styles;
};
