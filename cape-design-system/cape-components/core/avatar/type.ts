import type { ReactElement, ComponentPropsWithRef } from 'react';

interface AvatarBaseProps
  extends Omit<
    ComponentPropsWithRef<'div'>,
    'color' | 'children' | 'dangerouslySetInnerHTML'
  > {
  /**
   * Size variant of the root element.
   * @defaultValue 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   *  Control the visual appearance of the Card
   *  @defaultValue 'filled'
   */
  variant?: 'filled' | 'outlined';

  /**
   * The title of the person in the avatar. Also used as img tag "alt" attribute, "aria-label" attribute of the Avatar and as HTML's "title" attribute (it will show a small tooltip on hover).
   */
  title?: string;
}

export type AvatarIconProps = AvatarBaseProps & {
  /**
   * The icon element to be shown in the middle of the Avatar.
   * When the 'icon' prop is present, the 'image' and 'initials' props should not be provided.
   * The 'icon' prop is mutually exclusive with the 'image' and 'initials' props.
   */
  icon: ReactElement;
  image?: never;
  initials?: never;
};

export type AvatarImageProps = AvatarBaseProps & {
  /**
   * The image element or image URL to be shown as the Avatar.
   * When the 'image' prop is present, the 'icon' and 'initials' props should not be provided.
   * The 'image' prop is mutually exclusive with the 'icon' and 'initials' props.
   */
  image: ReactElement | string;
  icon?: never;
  initials?: never;
};

export type AvatarInitialsProps = AvatarBaseProps & {
  /**
   * Maximum of 2 characters that will be rendered in the Avatar.
   * When the 'initials' prop is present, the 'icon' and 'image' props should not be provided.
   * The 'initials' prop is mutually exclusive with the 'icon' and 'image' props.
   */
  initials: string;
  icon?: never;
  image?: never;
};

export type AvatarProps =
  | AvatarIconProps
  | AvatarImageProps
  | AvatarInitialsProps;
