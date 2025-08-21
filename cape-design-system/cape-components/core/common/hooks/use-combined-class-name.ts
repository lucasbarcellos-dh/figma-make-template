import classNames from 'classnames';
import type { UseCombinedClassNameProps } from './type';

export const useCombinedClassName = ({
  className = '',
  overrideClassName = '',
}: UseCombinedClassNameProps): string | undefined => {
  // Trim and check if the strings are empty
  const isClassNameEmpty = !className.trim();
  const isOverrideClassNameEmpty = !overrideClassName.trim();

  // If both are empty, return undefined
  if (isClassNameEmpty && isOverrideClassNameEmpty) {
    return undefined;
  }

  return classNames(className, overrideClassName);
};
