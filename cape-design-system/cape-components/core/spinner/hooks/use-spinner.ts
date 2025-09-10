import { useCombinedClassName } from '../../common/hooks';
import styles from '../spinner.module.scss';
import type { SpinnerProps } from '../type';

type UseSpinnerProps = SpinnerProps;

interface UseSpinnerReturnType {
  rootProps: {
    className?: string;
    style?: React.CSSProperties;
    'data-size': UseSpinnerProps['size'];
    'data-variant': UseSpinnerProps['variant'];
  };
  svgProps: {
    container: {
      className?: string;
    };
    line: {
      className?: string;
    };
    circle: {
      className?: string;
    };
  };
}

export const useSpinner = ({
  className = '',
  size,
  variant,
  ...restProps
}: UseSpinnerProps): UseSpinnerReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-size': size,
      'data-variant': variant,
      ...restProps,
    },
    svgProps: {
      container: {
        className: styles['svg-container'],
      },
      line: {
        className: styles.line,
      },
      circle: {
        className: styles.circle,
      },
    },
  };
};
