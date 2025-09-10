import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { PaddingProps } from './type';

export const usePaddingProps = (props: PaddingProps): CSSProperties => {
  const styles: CSSProperties = {};

  // Physical margin props
  styles.padding = resolveCssValue<CSSProperties['padding']>({
    property: 'padding',
    value: props.padding,
  });
  styles.paddingTop = resolveCssValue<CSSProperties['paddingTop']>({
    property: 'paddingTop',
    value: props.paddingTop,
  });
  styles.paddingBottom = resolveCssValue<CSSProperties['paddingBottom']>({
    property: 'paddingBottom',
    value: props.paddingBottom,
  });
  styles.paddingLeft = resolveCssValue<CSSProperties['paddingLeft']>({
    property: 'paddingLeft',
    value: props.paddingLeft,
  });
  styles.paddingRight = resolveCssValue<CSSProperties['paddingRight']>({
    property: 'paddingRight',
    value: props.paddingRight,
  });

  // Assignments for logical paddings
  styles.paddingInline = resolveCssValue<CSSProperties['paddingInline']>({
    property: 'paddingInline',
    value: props.paddingInline,
  });
  styles.paddingBlock = resolveCssValue<CSSProperties['paddingBlock']>({
    property: 'paddingBlock',
    value: props.paddingBlock,
  });
  styles.paddingBlockStart = resolveCssValue<
    CSSProperties['paddingBlockStart']
  >({
    property: 'paddingBlockStart',
    value: props.paddingBlockStart,
  });
  styles.paddingBlockEnd = resolveCssValue<CSSProperties['paddingBlockEnd']>({
    property: 'paddingBlockEnd',
    value: props.paddingBlockEnd,
  });
  styles.paddingInlineStart = resolveCssValue<
    CSSProperties['paddingInlineStart']
  >({
    property: 'paddingInlineStart',
    value: props.paddingInlineStart,
  });
  styles.paddingInlineEnd = resolveCssValue<CSSProperties['paddingInlineEnd']>({
    property: 'paddingInlineEnd',
    value: props.paddingInlineEnd,
  });

  return styles;
};
