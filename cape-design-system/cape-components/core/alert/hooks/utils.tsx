import {
  CloseCircleIcon,
  CheckCircleIcon,
  WarningCircleIcon,
  InfoCircleIcon,
} from '@deliveryhero/cape-icons';
import type { ReactNode } from 'react';
import type { AlertProps } from '../type';

export const defaultIconMapping: Record<
  NonNullable<AlertProps['variant']>,
  ReactNode
> = {
  error: <CloseCircleIcon size="medium" />,
  success: <CheckCircleIcon size="medium" />,
  warning: <WarningCircleIcon size="medium" />,
  neutral: <InfoCircleIcon size="medium" />,
  info: <InfoCircleIcon size="medium" />,
  branded: <InfoCircleIcon size="medium" />,
};
