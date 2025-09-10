import type { ReactNode } from 'react';
import {
  CheckCircleIcon,
  HelpCircleIcon,
  WarningCircleIcon,
} from '@deliveryhero/cape-icons';
import type { HelperTextIconProps } from './type';

const NAME = 'HelperTextIcon';

/**
 * HelperTextIcon component is used inside the HelperText component.
 */
export function HelperTextIcon({
  variant,
  size,
}: HelperTextIconProps): ReactNode {
  if (!variant) return null;

  const iconSize = size === 'large' ? 'medium' : 'small';

  const icons = {
    neutral: (
      <HelpCircleIcon
        aria-label="Help icon"
        role="graphics-symbol"
        size={iconSize}
      />
    ),
    success: (
      <CheckCircleIcon
        aria-label="Success icon"
        role="graphics-symbol"
        size={iconSize}
      />
    ),
    error: (
      <WarningCircleIcon
        aria-label="Warning icon"
        role="graphics-symbol"
        size={iconSize}
      />
    ),
  };

  return icons[variant];
}

HelperTextIcon.displayName = NAME;
