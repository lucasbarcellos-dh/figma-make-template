import { forwardRef } from 'react';
import type { TagProps } from './type';
import { useTag } from './hooks/use-tag';

/**
 * Tag component is used to label items with a status. It's a non-interactive component for giving very short information in user interfaces.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/88d710-tag
 */
export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ status = 'branded', size = 'medium', children, ...restProps }, ref) => {
    const {
      rootProps,
      labelProps,
      iconProps: { startIcon, endIcon, ...restIconProps },
    } = useTag({
      status,
      size,
      children,
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {startIcon ? <span {...restIconProps}>{startIcon}</span> : null}
        {children ? <span {...labelProps}>{children}</span> : null}
        {endIcon ? <span {...restIconProps}>{endIcon}</span> : null}
      </div>
    );
  },
);

Tag.displayName = 'Tag';
