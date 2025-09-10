import type { CSSProperties } from 'react';

export interface UseCombinedClassNameProps {
  className?: string;
  overrideClassName?: string;
}

// Mapping from MarginProps to CSS properties
export interface MarginProps {
  margin?: CSSProperties['margin'];
  marginTop?: CSSProperties['marginTop'];
  marginRight?: CSSProperties['marginRight'];
  marginBottom?: CSSProperties['marginBottom'];
  marginLeft?: CSSProperties['marginLeft'];
  marginBlock?: CSSProperties['marginBlock'];
  marginBlockStart?: CSSProperties['marginBlockStart'];
  marginBlockEnd?: CSSProperties['marginBlockEnd'];
  marginInline?: CSSProperties['marginInline'];
  marginInlineStart?: CSSProperties['marginInlineStart'];
  marginInlineEnd?: CSSProperties['marginInlineEnd'];
}

// Mapping from PaddingProps to CSS properties
export interface PaddingProps {
  padding?: CSSProperties['padding'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingBottom?: CSSProperties['paddingBottom'];
  paddingLeft?: CSSProperties['paddingLeft'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingInline?: CSSProperties['paddingInline'];
  paddingBlock?: CSSProperties['paddingBlock'];
  paddingBlockStart?: CSSProperties['paddingBlockStart'];
  paddingBlockEnd?: CSSProperties['paddingBlockEnd'];
  paddingInlineStart?: CSSProperties['paddingInlineStart'];
  paddingInlineEnd?: CSSProperties['paddingInlineEnd'];
}

// Mapping from WidthProps to CSS properties
export interface WidthProps {
  width?: CSSProperties['width'];
  inlineSize?: CSSProperties['inlineSize'];
  maxWidth?: CSSProperties['maxWidth'];
  minWidth?: CSSProperties['minWidth'];
}

// Mapping from HeightProps to CSS properties
export interface HeightProps {
  height?: CSSProperties['height'];
  blockSize?: CSSProperties['blockSize'];
  minHeight?: CSSProperties['minHeight'];
  maxHeight?: CSSProperties['maxHeight'];
}

// Mapping from PositionProps to CSS properties
export interface PositionProps {
  position?: CSSProperties['position'];
  top?: CSSProperties['top'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
  right?: CSSProperties['right'];
  inset?: CSSProperties['inset'];
  insetBlock?: CSSProperties['insetBlock'];
  insetBlockEnd?: CSSProperties['insetBlockEnd'];
  insetBlockStart?: CSSProperties['insetBlockStart'];
  insetInline?: CSSProperties['insetInline'];
  insetInlineEnd?: CSSProperties['insetInlineEnd'];
  insetInlineStart?: CSSProperties['insetInlineStart'];
  zIndex?: CSSProperties['zIndex'];
}

// Mapping from BorderProps to CSS properties
export interface BorderProps {
  border?: CSSProperties['border'];
  borderWidth?: CSSProperties['borderWidth'];
  borderStyle?: CSSProperties['borderStyle'];
  borderColor?: CSSProperties['borderColor'];
  borderRadius?: CSSProperties['borderRadius'];
  borderTop?: CSSProperties['borderTop'];
  borderRight?: CSSProperties['borderRight'];
  borderBottom?: CSSProperties['borderBottom'];
  borderLeft?: CSSProperties['borderLeft'];
  borderTopWidth?: CSSProperties['borderTopWidth'];
  borderRightWidth?: CSSProperties['borderRightWidth'];
  borderBottomWidth?: CSSProperties['borderBottomWidth'];
  borderLeftWidth?: CSSProperties['borderLeftWidth'];
  borderTopStyle?: CSSProperties['borderTopStyle'];
  borderRightStyle?: CSSProperties['borderRightStyle'];
  borderBottomStyle?: CSSProperties['borderBottomStyle'];
  borderLeftStyle?: CSSProperties['borderLeftStyle'];
  borderTopColor?: CSSProperties['borderTopColor'];
  borderRightColor?: CSSProperties['borderRightColor'];
  borderBottomColor?: CSSProperties['borderBottomColor'];
  borderLeftColor?: CSSProperties['borderLeftColor'];
  borderTopLeftRadius?: CSSProperties['borderTopLeftRadius'];
  borderTopRightRadius?: CSSProperties['borderTopRightRadius'];
  borderBottomRightRadius?: CSSProperties['borderBottomRightRadius'];
  borderBottomLeftRadius?: CSSProperties['borderBottomLeftRadius'];
}

// Mapping from CSSBoxProps to CSS properties
export interface CSSBoxProps {
  boxShadow?: CSSProperties['boxShadow'];
  boxSizing?: CSSProperties['boxSizing'];
}

// Mapping from BackgroundProps to CSS properties
export interface BackgroundProps {
  background?: CSSProperties['background'];
  backgroundColor?: CSSProperties['backgroundColor'];
}

// Mapping from WritingModeProps to CSS properties
export interface WritingModeProps {
  writingMode?: CSSProperties['writingMode'];
}

// Mapping from ColorProps to CSS properties
export interface ColorProps {
  color?: CSSProperties['color'];
}

/**
 * FlexBox properties for flex containers and children items inside them.
 *
 * @see {@link https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties| CSS-Tricks: Flexbox Properties}
 * */
// Mapping from FlexProps to CSS properties
export interface FlexProps {
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  flexFlow?: CSSProperties['flexFlow'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  gap?: CSSProperties['gap'];
  order?: CSSProperties['order'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
  flex?: CSSProperties['flex'];
  alignSelf?: CSSProperties['alignSelf'];
}

// Mapping from DisplayProps to CSS properties
export interface DisplayProps {
  display?: CSSProperties['display'];
}

// Mapping from OpacityProps to CSS properties
export interface OpacityProps {
  opacity?: CSSProperties['opacity'];
}
