import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../text-input.module.scss';
import type { TextInputProps } from '../type';

type UseTextInputProps = TextInputProps;

export interface UseTextInputReturnType {
  rootProps: {
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    'data-size'?: TextInputProps['size'];
    'data-disabled'?: TextInputProps['disabled'];
    'data-error'?: TextInputProps['error'];
    'data-validation-state'?: TextInputProps['validationState'];
  };
}

export const useTextInput = ({
  className = '',
  size,
  disabled,
  error,
  style,
  validationState,
  ...restProps
}: UseTextInputProps): UseTextInputReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    style,
    'data-size': size,
    'data-disabled': disabled,
    'data-error': error,
    'data-validation-state': validationState,
    ...restProps,
  },
});
