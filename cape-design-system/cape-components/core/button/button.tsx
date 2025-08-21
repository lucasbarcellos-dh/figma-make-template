import {
  createElement,
  forwardRef,
  isValidElement,
  type Ref,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Spinner } from '../spinner';
import type { ButtonProps } from './type';
import { useButton } from './hooks/use-button';

/**
 * A button is a clickable UI element that triggers a specific action.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/0385da-button
 */
export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      asChild = false,
      size = 'medium',
      variant = 'primary',
      status = 'branded',
      loading = false,
      disabled = false,
      type = 'button',
      children,
      ...restProps
    },
    ref,
  ) => {
    const {
      rootProps: { hasEndContent, hasStartContent, ...restRootProps },
      contentProps: {
        startIcon,
        endIcon,
        classNameStartContent,
        classNameEndContent,
        classNameMiddleContent,
        ...restContentProps
      },
      spinnerProps,
    } = useButton({
      size,
      disabled,
      variant,
      status,
      loading,
      ...restProps,
    });

    const renderChildren = (innerJSX: ReactNode): ReactNode[] => {
      return [
        loading ? <Spinner {...spinnerProps} /> : null,
        hasStartContent ? (
          <span className={classNameStartContent} {...restContentProps}>
            {startIcon}
          </span>
        ) : null,
        innerJSX,
        hasEndContent ? (
          <span className={classNameEndContent} {...restContentProps}>
            {endIcon}
          </span>
        ) : null,
      ];
    };

    if (asChild && isValidElement(children)) {
      const childElement = children as ReactElement;
      const elementType = childElement.type;
      const childProps = childElement.props as Record<string, unknown>;

      return createElement(
        elementType,
        {
          ref: ref as Ref<HTMLElement>,
          ...childProps,
          ...restRootProps,
        },
        ...renderChildren(childProps.children as ReactNode),
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        {...restRootProps}
      >
        {...renderChildren(
          children ? (
            <span className={classNameMiddleContent} {...restContentProps}>
              {children}
            </span>
          ) : null,
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
