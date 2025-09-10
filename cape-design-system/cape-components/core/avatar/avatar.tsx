import { forwardRef } from 'react';
import { UserCircleIcon } from '@deliveryhero/cape-icons';
import type { ReactNode } from 'react';
import { useAvatar } from './hooks/use-avatar';
import type { AvatarProps } from './type';

// Determine fallback content
const renderFallback = ({
  isImageError,
  title,
  styles,
}: {
  isImageError?: boolean;
  title?: string;
  styles?: string;
}): ReactNode | null => {
  if (isImageError) {
    if (title && title.length > 0) {
      return title.charAt(0); // First letter of alt text
    }
    return styles && <UserCircleIcon className={styles} />; // Generic avatar icon
  }
  return null;
};

/**
 * The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/22206a-avatar/b/98c829
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ size = 'medium', variant = 'filled', ...restProps }, ref) => {
    const {
      rootProps,
      title,
      initials,
      icon,
      iconProps,
      imageUrl,
      imageElement,
      imageProps,
      isImageError,
      renderFallbackProps,
    } = useAvatar({ size, variant, ...restProps });

    return (
      <div aria-label={title} ref={ref} role="img" title={title} {...rootProps}>
        {icon ? <span {...iconProps}>{icon}</span> : null}
        {initials}
        {imageUrl && !isImageError ? (
          <img alt={title} {...imageProps} src={imageUrl} />
        ) : null}
        {isImageError ? renderFallback({ ...renderFallbackProps }) : null}
        {imageElement ? <div {...imageProps}>{imageElement}</div> : null}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';
