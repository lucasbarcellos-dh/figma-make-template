import { useCallback, useEffect, useRef } from 'react';

/**
 * Provides a stable reference to a callback function across component re-renders.
 *
 * @typeParam T - A generic type extending a function type to describe the callback.
 * @param callback - A callback function whose reference needs to be stable.
 *                  It can be `undefined`, which will result in no operation being performed.
 * @param deps - An optional array of dependencies that will trigger the update of the callback.
 *               Similar to the dependencies array in `useEffect` or `useCallback`.
 * @returns A memoized version of the callback that only changes if one of the `deps` has changed.
 *
 * @remarks
 * The hook utilizes `useRef` to persist the latest reference to the callback.
 * With `useEffect`, it updates the ref whenever the `callback` or `deps` change.
 * The `useCallback` hook is then used to wrap this reference in a stable function
 * that persists between re-renders unless the dependencies change.
 *
 * This hook is particularly useful when you need to pass a callback to components
 * or hooks that should not cause re-renders, or when the callback is used in a context
 * where a stable reference is necessary to avoid unnecessary updates.
 *
 * @example
 * Here is how you can use the `useCallbackRef` hook:
 * ```tsx
 * const stableCallback = useCallbackRef(() => {
 *   // Callback implementation
 * }, [
 * //dependencies
 * ]);
 *
 * useEffect(() => {
 *   // Use `stableCallback` here without causing re-renders.
 *   someFunctionThatNeedsAStableCallback(stableCallback);
 * }, [stableCallback]);
 * ```
 */
export function useCallbackRef<T extends (...args: never[]) => unknown>(
  callback: T | undefined,
  deps: React.DependencyList = [],
): T {
  const callbackRef = useRef<T | undefined>(callback);

  useEffect(() => {
    callbackRef.current = callback;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- As Deps type can be checked while calling the function
  }, [callback, ...deps]);

  return useCallback(
    (...args: Parameters<T>) => {
      return callbackRef.current?.(...args) as ReturnType<T>;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `deps` is specified by the user, so we disable the lint rule here.
    deps,
  ) as T;
}
