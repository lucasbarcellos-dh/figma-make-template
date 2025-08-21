import { forwardRef } from 'react';
import type { ListItemProps } from './type';
import { useListItem } from './hooks/use-list-item';

/**
 * List Item is children of List
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/06cae6-list/b/4333f7
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, ...restProps }, ref) => {
    const {
      rootProps,
      content: {
        contentClassName,
        secondaryAction: {
          component: secondaryActionComponent,
          ...secondaryActionProps
        },
        contentContainerClassName,
        ...restContentProps
      },
    } = useListItem(restProps);

    return (
      <li ref={ref} {...rootProps}>
        <div className={contentContainerClassName} {...restContentProps}>
          <div className={contentClassName} {...restContentProps}>
            {children}
          </div>
          {secondaryActionComponent ? (
            <div {...secondaryActionProps}>{secondaryActionComponent}</div>
          ) : null}
        </div>
      </li>
    );
  },
);

ListItem.displayName = 'ListItem';
