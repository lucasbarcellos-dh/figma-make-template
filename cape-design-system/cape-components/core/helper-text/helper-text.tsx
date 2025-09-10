import { forwardRef } from 'react';
import type { HelperTextProps } from './type';
import { useHelperText } from './hooks/use-helper-text';
import { HelperTextIcon } from './components/helper-text-icon';

const NAME = 'HelperText';

/**
 * HelperText component is used to capture users' attention in a prominent way and inform them
 * of important information or status updates. The component can be used standalone or with form elements.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/4814a3-helper-text
 */
export const HelperText = forwardRef<HTMLDivElement, HelperTextProps>(
  (
    {
      variant = 'neutral',
      size = 'medium',
      icon = true,
      role = 'alert',
      children,
      ...restProps
    },
    ref,
  ) => {
    const { rootProps, textClassName, iconClassName } = useHelperText({
      variant,
      size,
      role,
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {icon ? (
          <span className={iconClassName}>
            <HelperTextIcon size={size} variant={variant} />
          </span>
        ) : null}

        <span className={textClassName}>{children}</span>
      </div>
    );
  },
);

HelperText.displayName = NAME;
