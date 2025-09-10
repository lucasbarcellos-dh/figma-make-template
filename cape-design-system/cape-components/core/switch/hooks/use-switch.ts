import { type CSSProperties, type InputHTMLAttributes } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import type { SwitchProps } from '../type';
import styles from '../switch.module.scss';
import { getInputProps } from '../../common/utils';

interface UseSwitchReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size': SwitchProps['size'];
    'data-disabled': SwitchProps['disabled'];
    'data-readonly': SwitchProps['readOnly'];
  };
  labelProps: {
    className?: string;
  };
  containerProps: {
    className?: string;
  };
  // prettier-ignore
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  baseProps: {
    className?: string;
  };
  controlProps: {
    className?: string;
  };
}

export const useSwitch = ({
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
  checked,
  defaultChecked,
  disabled,
  hideLabel,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...restProps
}: SwitchProps): UseSwitchReturnType => {
  const inputProps = {
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
  };

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-size': size,
      'data-disabled': disabled || undefined,
      'aria-disabled': disabled || undefined,
      'data-readonly': readOnly || undefined,
      ...restProps,
    },
    labelProps: {
      className: `${styles.label} cape-switch-label-text ${
        hideLabel ? styles['label-hidden'] : ''
      }`,
    },
    containerProps: {
      className: `${styles.container} cape-switch-container`,
    },
    inputProps: {
      role: 'switch',
      className: `${styles.input} cape-switch-input`,
      ...getInputProps(inputProps),
    },
    baseProps: {
      className: styles.base,
    },
    controlProps: {
      className: styles.control,
    },
  };
};
