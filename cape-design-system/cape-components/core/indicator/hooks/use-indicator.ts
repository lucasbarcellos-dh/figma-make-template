import { useCombinedClassName } from '../../common/hooks';
import type { IndicatorProps } from '../type';
import styles from '../indicator.module.scss';

type UseIndicatorProps = IndicatorProps & {
  childrenType?: string;
};

interface UseIndicatorReturnType {
  rootProps: {
    className?: string;
    style?: React.CSSProperties;
    role?: React.AriaRole;
    'data-status': UseIndicatorProps['status'];
    'data-size': UseIndicatorProps['size'];
    'data-spacing'?: 'none';
  };
}

export const useIndicator = ({
  className = '',
  role,
  status,
  size,
  children,
  ...restProps
}: UseIndicatorProps): UseIndicatorReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      role,
      'data-status': status,
      'data-size': size,
      'data-spacing': typeof children === 'string' ? undefined : 'none',
      ...restProps,
    },
  };
};
