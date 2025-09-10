import type { CSSProperties } from 'react';
import { resolveCssValue } from '../utils/css';
import type { FlexProps } from './type';

export const useFlexProps = (props: FlexProps): CSSProperties => {
  const styles: CSSProperties = {};

  // Using resolveCssValue for flex properties
  styles.flexDirection = resolveCssValue<CSSProperties['flexDirection']>({
    property: 'flexDirection',
    value: props.flexDirection,
  });
  styles.flexWrap = resolveCssValue<CSSProperties['flexWrap']>({
    property: 'flexWrap',
    value: props.flexWrap,
  });
  styles.flexFlow = resolveCssValue<CSSProperties['flexFlow']>({
    property: 'flexFlow',
    value: props.flexFlow,
  });
  styles.justifyContent = resolveCssValue<CSSProperties['justifyContent']>({
    property: 'justifyContent',
    value: props.justifyContent,
  });
  styles.alignItems = resolveCssValue<CSSProperties['alignItems']>({
    property: 'alignItems',
    value: props.alignItems,
  });
  styles.alignContent = resolveCssValue<CSSProperties['alignContent']>({
    property: 'alignContent',
    value: props.alignContent,
  });
  styles.rowGap = resolveCssValue<CSSProperties['rowGap']>({
    property: 'rowGap',
    value: props.rowGap,
  });
  styles.columnGap = resolveCssValue<CSSProperties['columnGap']>({
    property: 'columnGap',
    value: props.columnGap,
  });
  styles.gap = resolveCssValue<CSSProperties['gap']>({
    property: 'gap',
    value: props.gap,
  });
  styles.order = resolveCssValue<CSSProperties['order']>({
    property: 'order',
    value: props.order,
  });
  styles.flexGrow = resolveCssValue<CSSProperties['flexGrow']>({
    property: 'flexGrow',
    value: props.flexGrow,
  });
  styles.flexShrink = resolveCssValue<CSSProperties['flexShrink']>({
    property: 'flexShrink',
    value: props.flexShrink,
  });
  styles.flexBasis = resolveCssValue<CSSProperties['flexBasis']>({
    property: 'flexBasis',
    value: props.flexBasis,
  });
  styles.flex = resolveCssValue<CSSProperties['flex']>({
    property: 'flex',
    value: props.flex,
  });
  styles.alignSelf = resolveCssValue<CSSProperties['alignSelf']>({
    property: 'alignSelf',
    value: props.alignSelf,
  });

  return styles;
};
