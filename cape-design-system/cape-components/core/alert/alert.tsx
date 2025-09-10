import { forwardRef } from 'react';
import { CloseMiniIcon } from '@deliveryhero/cape-icons';
import { IconButton } from '../icon-button';
import type { AlertProps } from './type';
import { useAlert } from './hooks/use-alert';

/**
 * Alert component is used to capture users' attention in a prominent way and inform them of important information or status updates.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/8245db-alert
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      icon,
      variant = 'branded',
      role = 'alert',
      onClose,
      action,
      children,
      ...restProps
    },
    ref,
  ) => {
    const {
      rootProps,
      iconProps,
      iconElement,
      alertAction,
      contentWrapperProps,
      contentProps,
      closeIconProps,
    } = useAlert({
      icon,
      variant,
      role,
      action,
      onClose,
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {iconElement ? <div {...iconProps}>{iconElement}</div> : null}
        <div {...contentWrapperProps}>
          <div {...contentProps}>{children}</div>
          {action ? <div>{alertAction}</div> : null}
        </div>
        {onClose ? (
          <IconButton
            icon={<CloseMiniIcon />}
            size="small"
            {...closeIconProps}
          />
        ) : null}
      </div>
    );
  },
);

Alert.displayName = 'Alert';
