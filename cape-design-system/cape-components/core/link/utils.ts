import type { MutableRefObject, Ref, CSSProperties } from 'react';

export const mergeReactProps = <
  T extends Record<string, unknown>,
  K extends Record<string, unknown>,
>(
  parentProps: T,
  childProps: K,
): T & K => {
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = parentProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        // @ts-expect-error -- props could be any value
        overrideProps[propName] = (...args: unknown[]) => {
          // @ts-expect-error -- props could be any value
          childPropValue(...args);
          // @ts-expect-error -- props could be any value
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        // @ts-expect-error -- props could be any value
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === 'style') {
      // @ts-expect-error -- props could be any value
      overrideProps[propName] = {
        ...(slotPropValue as CSSProperties),
        ...(childPropValue as CSSProperties),
      } as CSSProperties;
    } else if (propName === 'className') {
      // @ts-expect-error -- props could be any value
      overrideProps[propName] = [slotPropValue, childPropValue]
        .filter(Boolean)
        .join(' ');
    }
  }

  return { ...parentProps, ...overrideProps };
};

function setRef<TInstance>(
  ref: Ref<TInstance> | undefined,
  instance: TInstance,
): void {
  if (ref instanceof Function) {
    ref(instance);
  } else if (ref !== null && ref !== undefined) {
    (ref as MutableRefObject<TInstance>).current = instance;
  }
}

export function combinedRef<TInstance>(refs: (Ref<TInstance> | undefined)[]) {
  return (instance: TInstance | null) => {
    refs.forEach((ref) => {
      setRef(ref, instance);
    });
  };
}
