import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../text-area.module.scss';
import type { TextAreaControlProps } from '../type';
import { useTextAreaContext } from '../../../hooks/use-text-area-context';
import type { TextAreaProps } from '../../../type';

interface UseTextAreaReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-disabled'?: TextAreaProps['disabled'];
  } & TextAreaControlProps;
}

export const useTextAreaControl = ({
  className = '',
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  autoCapitalize,
  autoComplete,
  name,
  minLength,
  maxLength,
  form,
  ...restProps
}: TextAreaControlProps): UseTextAreaReturnType => {
  const { disabled, required, readOnly } = useTextAreaContext();
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.control,
        overrideClassName: className,
      }),
      'data-disabled': disabled,
      ...restProps,
      disabled,
      required,
      readOnly,
      placeholder,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      autoCapitalize,
      autoComplete,
      name,
      minLength,
      maxLength,
      form,
    },
  };
};
