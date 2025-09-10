import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { MarginProps } from './type';

export const useMarginProps = (props: MarginProps): CSSProperties => {
  const styles: CSSProperties = {};

  // Physical margin props
  styles.margin = resolveCssValue<CSSProperties['margin']>({
    property: 'margin',
    value: props.margin,
  });
  styles.marginTop = resolveCssValue<CSSProperties['marginTop']>({
    property: 'marginTop',
    value: props.marginTop,
  });
  styles.marginBottom = resolveCssValue<CSSProperties['marginBottom']>({
    property: 'marginBottom',
    value: props.marginBottom,
  });
  styles.marginLeft = resolveCssValue<CSSProperties['marginLeft']>({
    property: 'marginLeft',
    value: props.marginLeft,
  });
  styles.marginRight = resolveCssValue<CSSProperties['marginRight']>({
    property: 'marginRight',
    value: props.marginRight,
  });

  // Assignments for logical margins
  styles.marginInline = resolveCssValue<CSSProperties['marginInline']>({
    property: 'marginInline',
    value: props.marginInline,
  });
  styles.marginBlock = resolveCssValue<CSSProperties['marginBlock']>({
    property: 'marginBlock',
    value: props.marginBlock,
  });
  styles.marginBlockStart = resolveCssValue<CSSProperties['marginBlockStart']>({
    property: 'marginBlockStart',
    value: props.marginBlockStart,
  });
  styles.marginBlockEnd = resolveCssValue<CSSProperties['marginBlockEnd']>({
    property: 'marginBlockEnd',
    value: props.marginBlockEnd,
  });
  styles.marginInlineStart = resolveCssValue<
    CSSProperties['marginInlineStart']
  >({
    property: 'marginInlineStart',
    value: props.marginInlineStart,
  });
  styles.marginInlineEnd = resolveCssValue<CSSProperties['marginInlineEnd']>({
    property: 'marginInlineEnd',
    value: props.marginInlineEnd,
  });

  return styles;
};
