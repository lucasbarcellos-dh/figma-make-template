import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import type { ListItemTextProps } from '../type';
import styles from '../../../list.module.scss';
import { useListContext } from '../../../context';

type UseListItemTextProps = ListItemTextProps;

interface ListItemTextContentReturnType {
  primaryText: {
    node: UseListItemTextProps['primaryText'];
    className?: string;
    'data-size': UseListItemTextProps['size'];
  };
  secondaryText: {
    node: UseListItemTextProps['secondaryText'];
    className?: string;
    'data-size': UseListItemTextProps['size'];
  };
}

interface UseListItemTextReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size': UseListItemTextProps['size'];
  };
  contentProps: ListItemTextContentReturnType;
}

export const useListItemText = ({
  className = '',
  size,
  primaryText,
  secondaryText,
  ...restProps
}: UseListItemTextProps): UseListItemTextReturnType => {
  const { size: globalSize } = useListContext();

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.text,
        overrideClassName: className,
      }),
      'data-size': size || globalSize,
      ...restProps,
    },
    contentProps: {
      primaryText: {
        node: primaryText,
        className: styles['primary-text'],
        'data-size': size || globalSize,
      },
      secondaryText: {
        node: secondaryText,
        className: styles['secondary-text'],
        'data-size': size || globalSize,
      },
    },
  };
};
