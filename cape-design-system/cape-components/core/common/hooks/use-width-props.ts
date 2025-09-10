import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { WidthProps } from './type';

export const useWidthProps = (props: WidthProps): CSSProperties => {
  const styles: CSSProperties = {};

  styles.inlineSize = resolveCssValue<CSSProperties['inlineSize']>({
    property: 'inlineSize',
    value: props.inlineSize,
  });
  styles.width = resolveCssValue<CSSProperties['width']>({
    property: 'width',
    value: props.width,
  });
  styles.minWidth = resolveCssValue<CSSProperties['minWidth']>({
    property: 'minWidth',
    value: props.minWidth,
  });
  styles.maxWidth = resolveCssValue<CSSProperties['maxWidth']>({
    property: 'maxWidth',
    value: props.maxWidth,
  });

  return styles;
};
