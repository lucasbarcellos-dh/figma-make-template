import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { BorderProps } from './type';

export const useBorderProps = (props: BorderProps): CSSProperties => {
  const styles: CSSProperties = {};

  // Handling border properties
  styles.border = resolveCssValue<CSSProperties['border']>({
    property: 'border',
    value: props.border,
  });
  styles.borderWidth = resolveCssValue<CSSProperties['borderWidth']>({
    property: 'borderWidth',
    value: props.borderWidth,
  });
  styles.borderStyle = resolveCssValue<CSSProperties['borderStyle']>({
    property: 'borderStyle',
    value: props.borderStyle,
  });
  styles.borderColor = resolveCssValue<CSSProperties['borderColor']>({
    property: 'borderColor',
    value: props.borderColor,
  });
  styles.borderRadius = resolveCssValue<CSSProperties['borderRadius']>({
    property: 'borderRadius',
    value: props.borderRadius,
  });
  styles.borderTop = resolveCssValue<CSSProperties['borderTop']>({
    property: 'borderTop',
    value: props.borderTop,
  });
  styles.borderRight = resolveCssValue<CSSProperties['borderRight']>({
    property: 'borderRight',
    value: props.borderRight,
  });
  styles.borderBottom = resolveCssValue<CSSProperties['borderBottom']>({
    property: 'borderBottom',
    value: props.borderBottom,
  });
  styles.borderLeft = resolveCssValue<CSSProperties['borderLeft']>({
    property: 'borderLeft',
    value: props.borderLeft,
  });
  styles.borderTopWidth = resolveCssValue<CSSProperties['borderTopWidth']>({
    property: 'borderTopWidth',
    value: props.borderTopWidth,
  });
  styles.borderRightWidth = resolveCssValue<CSSProperties['borderRightWidth']>({
    property: 'borderRightWidth',
    value: props.borderRightWidth,
  });
  styles.borderBottomWidth = resolveCssValue<
    CSSProperties['borderBottomWidth']
  >({
    property: 'borderBottomWidth',
    value: props.borderBottomWidth,
  });
  styles.borderLeftWidth = resolveCssValue<CSSProperties['borderLeftWidth']>({
    property: 'borderLeftWidth',
    value: props.borderLeftWidth,
  });
  styles.borderTopStyle = resolveCssValue<CSSProperties['borderTopStyle']>({
    property: 'borderTopStyle',
    value: props.borderTopStyle,
  });
  styles.borderRightStyle = resolveCssValue<CSSProperties['borderRightStyle']>({
    property: 'borderRightStyle',
    value: props.borderRightStyle,
  });
  styles.borderBottomStyle = resolveCssValue<
    CSSProperties['borderBottomStyle']
  >({
    property: 'borderBottomStyle',
    value: props.borderBottomStyle,
  });
  styles.borderLeftStyle = resolveCssValue<CSSProperties['borderLeftStyle']>({
    property: 'borderLeftStyle',
    value: props.borderLeftStyle,
  });
  styles.borderTopColor = resolveCssValue<CSSProperties['borderTopColor']>({
    property: 'borderTopColor',
    value: props.borderTopColor,
  });
  styles.borderRightColor = resolveCssValue<CSSProperties['borderRightColor']>({
    property: 'borderRightColor',
    value: props.borderRightColor,
  });
  styles.borderBottomColor = resolveCssValue<
    CSSProperties['borderBottomColor']
  >({
    property: 'borderBottomColor',
    value: props.borderBottomColor,
  });
  styles.borderLeftColor = resolveCssValue<CSSProperties['borderLeftColor']>({
    property: 'borderLeftColor',
    value: props.borderLeftColor,
  });
  styles.borderTopLeftRadius = resolveCssValue<
    CSSProperties['borderTopLeftRadius']
  >({
    property: 'borderTopLeftRadius',
    value: props.borderTopLeftRadius,
  });
  styles.borderTopRightRadius = resolveCssValue<
    CSSProperties['borderTopRightRadius']
  >({
    property: 'borderTopRightRadius',
    value: props.borderTopRightRadius,
  });
  styles.borderBottomRightRadius = resolveCssValue<
    CSSProperties['borderBottomRightRadius']
  >({
    property: 'borderBottomRightRadius',
    value: props.borderBottomRightRadius,
  });
  styles.borderBottomLeftRadius = resolveCssValue<
    CSSProperties['borderBottomLeftRadius']
  >({
    property: 'borderBottomLeftRadius',
    value: props.borderBottomLeftRadius,
  });

  return styles;
};
