/* eslint-disable @typescript-eslint/naming-convention -- CSS properties must be in camelCase */
// Define a mapping of properties to their value formats
export const CSS_PROPERTY_VALUE_FORMATS: Record<string, string> = {
  // Dimension properties
  width: 'px',
  minWidth: 'px',
  maxWidth: 'px',
  height: 'px',
  minHeight: 'px',
  maxHeight: 'px',
  blockSize: 'px',
  top: 'px',
  right: 'px',
  bottom: 'px',
  left: 'px',

  // Margin properties
  margin: 'px',
  marginTop: 'px',
  marginRight: 'px',
  marginBottom: 'px',
  marginLeft: 'px',
  marginBlock: 'px',
  marginBlockStart: 'px',
  marginBlockEnd: 'px',
  marginInline: 'px',
  marginInlineStart: 'px',
  marginInlineEnd: 'px',

  // Padding properties
  padding: 'px',
  paddingTop: 'px',
  paddingRight: 'px',
  paddingBottom: 'px',
  paddingLeft: 'px',
  paddingBlock: 'px',
  paddingBlockStart: 'px',
  paddingBlockEnd: 'px',
  paddingInline: 'px',
  paddingInlineStart: 'px',
  paddingInlineEnd: 'px',

  // Border and Radius properties
  borderWidth: 'px',
  borderRadius: 'px',
  borderTopWidth: 'px',
  borderRightWidth: 'px',
  borderBottomWidth: 'px',
  borderLeftWidth: 'px',
  borderTopLeftRadius: 'px',
  borderTopRightRadius: 'px',
  borderBottomRightRadius: 'px',
  borderBottomLeftRadius: 'px',

  // Flex and Gap properties
  flexBasis: 'px',
  rowGap: 'px',
  columnGap: 'px',
  gap: 'px',

  // Inset properties
  inset: 'px',
  insetBlock: 'px',
  insetBlockEnd: 'px',
  insetBlockStart: 'px',
  insetInline: 'px',
  insetInlineEnd: 'px',
  insetInlineStart: 'px',

  // Font properties
  fontSize: 'px',
};

export enum MarginPropsEnum {
  margin = 'margin',
  marginTop = 'marginTop',
  marginRight = 'marginRight',
  marginBottom = 'marginBottom',
  marginLeft = 'marginLeft',
  marginBlock = 'marginBlock',
  marginBlockStart = 'marginBlockStart',
  marginBlockEnd = 'marginBlockEnd',
  marginInline = 'marginInline',
  marginInlineStart = 'marginInlineStart',
  marginInlineEnd = 'marginInlineEnd',
}

export enum PaddingPropsEnum {
  padding = 'padding',
  paddingTop = 'paddingTop',
  paddingBottom = 'paddingBottom',
  paddingLeft = 'paddingLeft',
  paddingRight = 'paddingRight',
  paddingBlock = 'paddingBlock',
  paddingBlockStart = 'paddingBlockStart',
  paddingBlockEnd = 'paddingBlockEnd',
  paddingInline = 'paddingInline',
  paddingInlineStart = 'paddingInlineStart',
  paddingInlineEnd = 'paddingInlineEnd',
}

export enum WidthPropsEnum {
  width = 'width',
  inlineSize = 'inlineSize',
  maxWidth = 'maxWidth',
  minWidth = 'minWidth',
}

export enum FlexPropsEnum {
  flexDirection = 'flexDirection',
  flexWrap = 'flexWrap',
  flexFlow = 'flexFlow',
  justifyContent = 'justifyContent',
  justifyItems = 'justifyItems',
  alignItems = 'alignItems',
  alignContent = 'alignContent',
  rowGap = 'rowGap',
  columnGap = 'columnGap',
  gap = 'gap',
  order = 'order',
  flexGrow = 'flexGrow',
  flexShrink = 'flexShrink',
  flexBasis = 'flexBasis',
  flex = 'flex',
  alignSelf = 'alignSelf',
}

export enum PositionPropsEnum {
  position = 'position',
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  inset = 'inset',
  insetBlock = 'insetBlock',
  insetBlockEnd = 'insetBlockEnd',
  insetBlockStart = 'insetBlockStart',
  insetInline = 'insetInline',
  insetInlineEnd = 'insetInlineEnd',
  insetInlineStart = 'insetInlineStart',
  zIndex = 'zIndex',
}

export enum HeightPropsEnum {
  height = 'height',
  blockSize = 'blockSize',
  minHeight = 'minHeight',
  maxHeight = 'maxHeight',
}

export enum BorderPropsEnum {
  border = 'border',
  borderWidth = 'borderWidth',
  borderStyle = 'borderStyle',
  borderColor = 'borderColor',
  borderRadius = 'borderRadius',
  borderTop = 'borderTop',
  borderRight = 'borderRight',
  borderBottom = 'borderBottom',
  borderLeft = 'borderLeft',
  borderTopWidth = 'borderTopWidth',
  borderRightWidth = 'borderRightWidth',
  borderBottomWidth = 'borderBottomWidth',
  borderLeftWidth = 'borderLeftWidth',
  borderTopStyle = 'borderTopStyle',
  borderRightStyle = 'borderRightStyle',
  borderBottomStyle = 'borderBottomStyle',
  borderLeftStyle = 'borderLeftStyle',
  borderTopColor = 'borderTopColor',
  borderRightColor = 'borderRightColor',
  borderBottomColor = 'borderBottomColor',
  borderLeftColor = 'borderLeftColor',
  borderTopLeftRadius = 'borderTopLeftRadius',
  borderTopRightRadius = 'borderTopRightRadius',
  borderBottomRightRadius = 'borderBottomRightRadius',
  borderBottomLeftRadius = 'borderBottomLeftRadius',
}

export enum BackgroundPropsEnum {
  background = 'background',
  backgroundColor = 'backgroundColor',
}

export enum OpacityPropsEnum {
  opacity = 'opacity',
}

export enum ColorPropsEnum {
  color = 'color',
}

export enum WritingModePropsEnum {
  writingMode = 'writingMode',
}

export enum DisplayPropsEnum {
  display = 'display',
}

export enum CSSBoxPropsEnum {
  boxShadow = 'boxShadow',
  boxSizing = 'boxSizing',
}

export enum HTMLInputPropsEnum {
  type = 'type',
}

export const StyleProps = {
  MarginProps: MarginPropsEnum,
  PaddingProps: PaddingPropsEnum,
  FlexProps: FlexPropsEnum,
  BorderProps: BorderPropsEnum,
  HeightProps: HeightPropsEnum,
  PositionProps: PositionPropsEnum,
  BackgroundProps: BackgroundPropsEnum,
  OpacityProps: OpacityPropsEnum,
  WidthProps: WidthPropsEnum,
  ColorProps: ColorPropsEnum,
  WritingModeProps: WritingModePropsEnum,
  DisplayProps: DisplayPropsEnum,
  CSSBoxProps: CSSBoxPropsEnum,
};

export const StylePropsList = {
  ...MarginPropsEnum,
  ...PaddingPropsEnum,
  ...FlexPropsEnum,
  ...BorderPropsEnum,
  ...HeightPropsEnum,
  ...PositionPropsEnum,
  ...BackgroundPropsEnum,
  ...OpacityPropsEnum,
  ...WidthPropsEnum,
  ...ColorPropsEnum,
  ...WritingModePropsEnum,
  ...DisplayPropsEnum,
  ...CSSBoxPropsEnum,
};
