import type { TextInputProps } from '../../../text-input';

export type PaginationInputProps = Omit<TextInputProps, 'size'> & {
  placeholder?: string;
};
