import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils';
import type { PositionProps } from './type';

export const usePositionProps = (props: PositionProps): CSSProperties => {
  const styles: CSSProperties = {};

  // Handling position properties
  styles.position = resolveCssValue<CSSProperties['position']>({
    property: 'position',
    value: props.position,
  });
  styles.top = resolveCssValue<CSSProperties['top']>({
    property: 'top',
    value: props.top,
  });
  styles.bottom = resolveCssValue<CSSProperties['bottom']>({
    property: 'bottom',
    value: props.bottom,
  });
  styles.left = resolveCssValue<CSSProperties['left']>({
    property: 'left',
    value: props.left,
  });
  styles.right = resolveCssValue<CSSProperties['right']>({
    property: 'right',
    value: props.right,
  });
  styles.inset = resolveCssValue<CSSProperties['inset']>({
    property: 'inset',
    value: props.inset,
  });
  styles.insetBlock = resolveCssValue<CSSProperties['insetBlock']>({
    property: 'insetBlock',
    value: props.insetBlock,
  });
  styles.insetBlockEnd = resolveCssValue<CSSProperties['insetBlockEnd']>({
    property: 'insetBlockEnd',
    value: props.insetBlockEnd,
  });
  styles.insetBlockStart = resolveCssValue<CSSProperties['insetBlockStart']>({
    property: 'insetBlockStart',
    value: props.insetBlockStart,
  });
  styles.insetInline = resolveCssValue<CSSProperties['insetInline']>({
    property: 'insetInline',
    value: props.insetInline,
  });
  styles.insetInlineEnd = resolveCssValue<CSSProperties['insetInlineEnd']>({
    property: 'insetInlineEnd',
    value: props.insetInlineEnd,
  });
  styles.insetInlineStart = resolveCssValue<CSSProperties['insetInlineStart']>({
    property: 'insetInlineStart',
    value: props.insetInlineStart,
  });
  styles.zIndex = resolveCssValue<CSSProperties['zIndex']>({
    property: 'zIndex',
    value: props.zIndex,
  });

  return styles;
};
