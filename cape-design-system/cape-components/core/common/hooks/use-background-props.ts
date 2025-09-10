import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { BackgroundProps } from './type';

export const useBackgroundProps = (props: BackgroundProps): CSSProperties => {
  const styles: CSSProperties = {};

  styles.background = resolveCssValue<CSSProperties['background']>({
    property: 'background',
    value: props.background,
  });
  styles.backgroundColor = resolveCssValue<CSSProperties['backgroundColor']>({
    property: 'backgroundColor',
    value: props.backgroundColor,
  });

  return styles;
};
