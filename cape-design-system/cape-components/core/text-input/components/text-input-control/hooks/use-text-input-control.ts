import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import { omitStyleProps } from '../../../../common/utils';
import styles from '../../../text-input.module.scss';
import type { TextInputControlProps } from '../type';
import { useTextInputContext } from '../../../hooks/use-text-input-context';

export interface UseTextInputControlReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  } & TextInputControlProps;
}

export const useTextInputControl = ({
  className = '',
  type,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  autoCapitalize,
  autoComplete,
  name,
  pattern,
  minLength,
  maxLength,
  list,
  form,
  ...restProps
}: TextInputControlProps): UseTextInputControlReturnType => {
  const { disabled, required, readOnly } = useTextInputContext();
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.control,
        overrideClassName: className,
      }),
      ...omitStyleProps(restProps as CSSProperties),
      type,
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
      pattern,
      minLength,
      maxLength,
      list,
      form,
    },
  };
};
