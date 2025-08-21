import { isValidElement, useState } from 'react';
import type { ReactElement } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import type { AvatarProps } from '../type';
import styles from '../avatar.module.scss';

interface UseAvatarReturnType {
  rootProps: {
    className?: string;
    style?: React.CSSProperties;
    role?: React.AriaRole;
    'data-size': AvatarProps['size'];
    'data-variant': AvatarProps['variant'];
  };
  initials: AvatarProps['initials'];
  imageUrl?: string;
  imageElement?: ReactElement;
  title: AvatarProps['title'];
  icon: AvatarProps['icon'];
  iconProps: {
    className?: string;
  };
  imageProps: {
    className?: string;
    onError: () => void;
  };
  isImageError: boolean;
  renderFallbackProps?: {
    styles?: string;
    isImageError?: boolean;
    title?: string;
  };
}

export const useAvatar = ({
  className = '',
  variant,
  image,
  title,
  size,
  ...restProps
}: AvatarProps): UseAvatarReturnType => {
  let { icon, initials } = restProps;

  const [isImageError, setIsImageError] = useState(false);

  // Image error handler
  const handleImageError = (): void => {
    setIsImageError(true);
  };

  const propsCount = [icon, image, initials].filter(Boolean).length;

  if (propsCount > 1) {
    // eslint-disable-next-line no-console -- warn users if more than one prop is used
    console.warn(
      'Avatar component should not receive more than one of the following props at the same time: icon, image, initials. Only one will be rendered.',
    );

    // Prioritize image over icon over initials
    if (typeof image !== 'undefined') {
      icon = undefined;
      initials = undefined;
    } else if (icon) {
      initials = undefined;
    }
  }

  // Prioritize props
  const validatedIcon = initials ? undefined : icon;
  const validatedImage =
    image && typeof image === 'string' && !isImageError ? image : undefined;
  const validatedImageElement =
    isValidElement(image) && !isImageError ? image : undefined;

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-size': size,
      'data-variant': variant,
      ...restProps,
    },
    initials,
    imageUrl: validatedImage,
    imageElement: validatedImageElement,
    title,
    icon: validatedIcon,
    iconProps: {
      className: styles.icon,
    },
    imageProps: {
      className: styles.image,
      onError: handleImageError,
    },
    isImageError,
    renderFallbackProps: {
      isImageError,
      title,
      styles: styles.icon,
    },
  };
};
