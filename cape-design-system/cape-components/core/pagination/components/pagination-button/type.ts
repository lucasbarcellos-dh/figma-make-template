import type { ButtonProps } from '../../../button';

export type PaginationButtonProps = Omit<ButtonProps, 'color' | 'as'> & {
  /**
   * The action that the button will perform.
   */
  action: 'next' | 'prev' | 'first' | 'last';
};
