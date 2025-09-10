import type { ComponentPropsWithRef, ReactNode } from 'react';

/**
 * Properties for an AccordionItem component.
 */

export type AccordionItemProps = {
  /**
   * The content of the accordion item.
   */
  children: ReactNode;

  /**
   * Callback function triggered when the accordion item is toggled.
   * @param key - The key of the accordion item.
   * @param status - The toggle status of the accordion item.
   */
  onToggle?: (key: string, status: boolean) => void;

  /**
   * Indicates whether the accordion item is disabled.
   */
  disabled?: boolean;

  /**
   * The value associated with the accordion item.
   */
  value: string;
} & Omit<ComponentPropsWithRef<'details'>, 'onToggle'>;
