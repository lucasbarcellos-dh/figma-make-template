import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { useCallbackRef } from './use-callback-ref';

export interface UseControllableStateProps<T> {
  /** The controlled state value, if applicable. */
  value?: T;
  /** The default state value for uncontrolled use. Can be a function that returns the initial value. */
  defaultValue?: T | (() => T);
  /** A callback that is called when the state changes. */
  onChange?: (value: T) => void;
  /**
   * A function that determines whether an update should occur. By default, it compares the previous
   * and next values for inequality.
   */
  shouldUpdate?: (prev: T, next: T) => boolean;
}

/**
 * A hook for managing state in both controlled and uncontrolled scenarios.
 *
 * It is similar to `useState`, but it also supports controlled operation where the state is managed by a parent component.
 *
 * @param props - An object containing a controlled value, a default value, a change handler, and an optional shouldUpdate function.
 * @returns A stateful value and a function to update it.
 *
 * @typeParam T - The type of the stateful value.
 */
export function useControllableState<T>(
  props: UseControllableStateProps<T>,
): [T, Dispatch<SetStateAction<T>>] {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next,
  } = props;

  // Obtain stable references to onChange and shouldUpdate callbacks
  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);

  // State management for uncontrolled component
  const [uncontrolledState, setUncontrolledState] = useState<T>(
    defaultValue as T,
  );
  // Determine if the component is controlled
  const controlled = valueProp !== undefined;
  // Use the controlled value or the uncontrolled state
  const value = controlled ? valueProp : uncontrolledState;

  // Create a stable setter function
  const setValue: Dispatch<SetStateAction<T>> = useCallbackRef(
    (next: SetStateAction<T>) => {
      // Determine the next value
      const nextValue =
        typeof next === 'function'
          ? (next as (prevState: T) => T)(value)
          : next;

      // Check if an update should occur
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }

      // Update uncontrolled state if applicable
      if (!controlled) {
        setUncontrolledState(nextValue);
      }

      // Call onChange callback if provided
      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value, shouldUpdateProp],
  );

  // Return the stateful value and the setter function
  return [value, setValue];
}
