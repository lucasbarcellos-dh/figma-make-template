import {
  type ChangeEvent,
  type ReactElement,
  type SyntheticEvent,
  useState,
} from 'react';
import { type DropdownProps } from 'react-day-picker';
import styles from '../../date-picker.module.scss';

export function DatePickerYearLeaf(props: DropdownProps): ReactElement {
  const {
    options,
    classNames: _classNames,
    components,
    onChange,
    ...selectProps
  } = props;
  const [showYearPicker, setShowYearPicker] = useState<boolean>(false);

  const handleSelectYear = (e: SyntheticEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const targetButton = e.target as HTMLButtonElement;
    setShowYearPicker(false);

    if (onChange) {
      const changeEvent = {
        target: {
          value: targetButton.value,
        },
      } as ChangeEvent<HTMLSelectElement>;
      onChange(changeEvent);
    }
  };

  const selectedOption = options?.find(
    ({ value }) => value === selectProps.value,
  );

  return (
    <div>
      <button
        className={styles['year-dropdown-root']}
        data-pressed={showYearPicker}
        onClick={() => {
          setShowYearPicker(!showYearPicker);
        }}
        type="button"
      >
        {selectedOption?.label}
        <components.Chevron orientation="down" />
      </button>
      {showYearPicker ? (
        <div className={styles['year-picker-wrapper']}>
          {options?.map(({ value, label, disabled }) => (
            <button
              aria-disabled={disabled}
              className={styles['year-button']}
              data-selected={selectedOption?.value === value}
              disabled={disabled}
              key={value}
              onClick={handleSelectYear}
              type="button"
              value={value}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
