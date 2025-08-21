import {
  forwardRef,
  isValidElement,
  cloneElement,
  type ReactNode,
} from 'react';
import { Button } from '../../../button';
import type { DialogTriggerProps } from './type';
import { useDialogTrigger } from './hooks/use-dialog-trigger';

/**
 * Used to set the position of the Dialog. DialogTrigger component must be wrapped inside `<Dialog />`
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/448cfe-dialog
 */
export const DialogTrigger = forwardRef<HTMLDivElement, DialogTriggerProps>(
  function DialogTrigger({ children, ...restProps }, ref): ReactNode {
    const { rootProps } = useDialogTrigger({
      ref,
      children,
      ...restProps,
    });

    if (isValidElement(children)) {
      return cloneElement(children, { ...rootProps });
    }

    return <Button {...rootProps}>{children}</Button>;
  },
);
