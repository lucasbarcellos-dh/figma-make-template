import type { AriaRole } from 'react';
import type { ChipProps } from '../type';
import { type IconButtonProps } from '../../icon-button/type';

export type UseChipProps = ChipProps;

interface RootPropsType {
  className?: string;
  'data-size': UseChipProps['size'];
  'data-selected'?: UseChipProps['selected'];
  disabled: UseChipProps['disabled'];
  style?: UseChipProps['style'];
  onClick?: UseChipProps['onClick'];
  label: UseChipProps['label'];
  startIcon?: UseChipProps['startIcon'];
  endIcon?: UseChipProps['endIcon'];
  tabIndex?: number;
  role?: AriaRole;
  'data-disabled'?: boolean;
  'data-interactive'?: boolean;
  hasLabel: boolean;
  hasStartContent: boolean;
  hasEndContent: boolean;
  hasCloseButton: boolean;
}
interface IconButtonPropsType extends IconButtonProps {
  'data-testid': string;
}

interface BaseContentPropsType {
  className?: string;
  'data-size'?: UseChipProps['size'];
  'data-selected'?: UseChipProps['selected'];
  'data-disabled'?: UseChipProps['disabled'];
  'data-slot-placement'?: 'start' | 'end';
}

interface TextContainerPropsType extends BaseContentPropsType {
  'data-interactive'?: boolean;
}

type StartContentPropsType = BaseContentPropsType;
type EndContentPropsType = BaseContentPropsType;
export interface UseChipReturnType {
  rootProps: RootPropsType;
  iconButtonProps?: IconButtonPropsType;
  textContainerProps?: TextContainerPropsType;
  startContentProps?: StartContentPropsType;
  endContentProps?: EndContentPropsType;
}
