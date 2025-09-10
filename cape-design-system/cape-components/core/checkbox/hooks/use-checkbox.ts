import type { InputHTMLAttributes } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import type { CheckboxProps } from '../type';
import styles from '../checkbox.module.scss';
import { getInputProps } from '../../common/utils';

interface UseCheckboxReturnType {
  rootProps: {
    className?: string;
    'data-size': CheckboxProps['size'];
    'data-disabled': CheckboxProps['disabled'];
    'data-readonly': CheckboxProps['readOnly'];
    'data-indeterminate': CheckboxProps['indeterminate'];
  };
  labelProps: {
    className?: string;
  };
  containerProps: {
    className?: string;
  };
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  controlProps: {
    className?: string;
    'data-error'?: CheckboxProps['error'];
  };
  iconProps: {
    className?: string;
  };
}

export const useCheckbox = ({
  className = '',
  size,
  id,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  name,
  value,
  tabIndex = undefined,
  required,
  readOnly,
  indeterminate,
  checked,
  defaultChecked,
  disabled,
  error,
  hideLabel,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...restProps
}: CheckboxProps): UseCheckboxReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-size': size,
      'data-disabled': disabled,
      'data-readonly': readOnly,
      'data-indeterminate': indeterminate,
      ...restProps,
    },
    labelProps: {
      className: `${styles.label} ${hideLabel ? styles['label-hidden'] : ''}`,
    },
    containerProps: {
      className: styles.container,
    },
    inputProps: {
      className: styles.input,
      ...getInputProps({
        type: 'checkbox',
        name,
        value,
        id,
        tabIndex,
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        onKeyUp,
        required,
        readOnly,
        checked,
        defaultChecked,
        disabled,
        ariaLabel,
        ariaLabelledBy,
      }),
    },
    controlProps: {
      className: styles.control,
      'data-error': error,
    },
    iconProps: {
      className: styles.icon,
    },
  };
};
