import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import { omitStyleProps } from '../../../../common/utils';
import { useListContext } from '../../../context';
import styles from '../../../list.module.scss';
import type { ListItemProps } from '../type';

type UseListItemProps = ListItemProps;

interface SecondaryAction {
  component: UseListItemProps['secondaryAction'];
  className?: string;
}
interface UseListItemReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size'?: UseListItemProps['size'];
    'data-selected'?: UseListItemProps['selected'];
    'data-interactive'?: boolean;
    'data-disabled'?: boolean;
    'data-divider'?: boolean;
  };
  content: {
    secondaryAction: SecondaryAction;
    contentClassName?: string;
    contentContainerClassName?: string;
    'data-disabled'?: boolean;
  };
}

export const useListItem = ({
  className = '',
  size,
  divider,
  secondaryAction,
  selected = false,
  disabled = false,
  style,
  ...restProps
}: UseListItemProps): UseListItemReturnType => {
  const { size: globalSize, divider: globalDivider } = useListContext();
  const { onClick } = restProps;
  const isItemDividerHidden = divider !== undefined ? divider : globalDivider;

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.item,
        overrideClassName: className,
      }),
      'data-size': size || globalSize,
      ...(disabled
        ? { 'data-disabled': disabled }
        : {
            'data-selected': selected,
            'data-interactive': typeof onClick !== 'undefined',
          }),
      'data-divider': isItemDividerHidden,
      style,
      ...omitStyleProps(restProps as CSSProperties),
    },
    content: {
      secondaryAction: {
        className: styles['secondary-action'],
        component: secondaryAction,
      },
      contentClassName: styles.content,
      contentContainerClassName: styles['content-container'],
      ...(disabled ? { 'data-disabled': disabled } : {}),
    },
  };
};
