import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../text-area.module.scss';
import type { TextAreaProps } from '../type';

type UseTextAreaProps = TextAreaProps;

interface UseTextAreaReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size'?: TextAreaProps['size'];
    'data-disabled'?: TextAreaProps['disabled'];
    'data-error'?: TextAreaProps['error'];
    'data-validation-state'?: TextAreaProps['validationState'];
  };
}

export const useTextArea = ({
  className = '',
  size,
  disabled,
  error,
  validationState,
  ...restProps
}: UseTextAreaProps): UseTextAreaReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    'data-size': size,
    'data-disabled': disabled,
    'data-error': error,
    'data-validation-state': validationState,
    ...restProps,
  },
});
