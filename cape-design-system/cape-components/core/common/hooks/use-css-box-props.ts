import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { CSSBoxProps } from './type';

export const useCSSBoxProps = (props: CSSBoxProps): CSSProperties => {
  const styles: CSSProperties = {};

  styles.boxShadow = resolveCssValue<CSSProperties['boxShadow']>({
    property: 'boxShadow',
    value: props.boxShadow,
  });
  styles.boxSizing = resolveCssValue<CSSProperties['boxSizing']>({
    property: 'boxSizing',
    value: props.boxSizing,
  });

  return styles;
};
