import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../button.module.scss';
import type { ButtonProps } from '../type';
import type { SpinnerProps } from '../../spinner';

type UseButtonProps = ButtonProps;

interface UseButtonReturnType {
  rootProps: {
    'data-size': UseButtonProps['size'];
    'data-variant': UseButtonProps['variant'];
    'data-status': UseButtonProps['status'];
    'data-loading': UseButtonProps['loading'];
    disabled: UseButtonProps['disabled'];
    className?: string;
    style?: CSSProperties;
    startIcon?: UseButtonProps['startIcon'];
    endIcon?: UseButtonProps['endIcon'];
    hasStartContent?: boolean;
    hasEndContent?: boolean;
  };
  contentProps: {
    'data-size': UseButtonProps['size'];
    'data-variant': UseButtonProps['variant'];
    'data-status': UseButtonProps['status'];
    'data-loading': UseButtonProps['loading'];
    disabled: UseButtonProps['disabled'];
    classNameStartContent?: string;
    classNameEndContent?: string;
    startIcon: UseButtonProps['startIcon'];
    endIcon?: UseButtonProps['endIcon'];
    classNameMiddleContent?: string;
  };
  spinnerProps: {
    variant: SpinnerProps['variant'];
    size: SpinnerProps['size'];
    className?: string;
  };
}

const BUTTON_SPINNER_SIZE_MAPPING = {
  xsmall: 'xsmall',
  small: 'xsmall',
  medium: 'small',
  large: 'small',
};

const getSpinnerVariant = (
  variant: UseButtonProps['variant'],
  status: UseButtonProps['status'],
): SpinnerProps['variant'] => {
  if (variant === 'primary') {
    return status === 'inverse' ? 'branded' : 'inverse';
  }
  return status === 'inverse' ? 'inverse' : 'branded';
};

export const useButton = ({
  className = '',
  variant,
  status,
  size,
  disabled,
  startIcon,
  endIcon,
  loading,
  ...restProps
}: UseButtonProps): UseButtonReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles[variant as string],
      overrideClassName: className,
    }),
    disabled: loading || disabled,
    hasStartContent: Boolean(startIcon),
    hasEndContent: Boolean(endIcon),
    'data-size': size,
    'data-status': status,
    'data-variant': variant,
    'data-loading': loading,
    ...restProps,
  },
  contentProps: {
    startIcon,
    endIcon,
    classNameStartContent: useCombinedClassName({
      className: styles['start-content'],
      overrideClassName: styles.content,
    }),
    classNameEndContent: useCombinedClassName({
      className: styles['end-content'],
      overrideClassName: styles.content,
    }),
    classNameMiddleContent: useCombinedClassName({
      className: styles['middle-content'],
      overrideClassName: styles.content,
    }),
    disabled: loading || disabled,
    'data-size': size,
    'data-status': status,
    'data-variant': variant,
    'data-loading': loading,
  },
  spinnerProps: {
    variant: getSpinnerVariant(variant, status),
    size: size && (BUTTON_SPINNER_SIZE_MAPPING[size] as SpinnerProps['size']),
    className: styles['spinner-override'],
  },
});
