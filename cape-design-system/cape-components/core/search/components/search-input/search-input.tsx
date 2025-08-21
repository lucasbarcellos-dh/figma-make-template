import { forwardRef } from 'react';
import { CloseMiniIcon, SearchIcon } from '@deliveryhero/cape-icons';
import {
  TextInput,
  TextInputControl,
  TextInputSlot,
} from '../../../text-input';
import { IconButton } from '../../../icon-button';
import { useSearchInput } from './hooks/use-search-input';
import type { SearchInputProps } from './type';

const NAME = 'SearchInput';

/**
 * SearchInput is used with Search.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/34b998-search
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ clearButtonLabel = 'Clear search', ...restProps }, ref) => {
    const { rootProps, searchIconProps, clearButtonProps, inputProps } =
      useSearchInput({ clearButtonLabel, ...restProps });

    const { showClearIcon, handleClearIconClick, ...restClearButtonProps } =
      clearButtonProps;

    return (
      <TextInput {...rootProps}>
        <TextInputSlot>
          <SearchIcon {...searchIconProps} />
        </TextInputSlot>
        <TextInputControl {...inputProps} ref={ref} type="search" />
        {showClearIcon ? (
          <TextInputSlot>
            <IconButton
              icon={<CloseMiniIcon />}
              onClick={handleClearIconClick}
              {...restClearButtonProps}
            />
          </TextInputSlot>
        ) : null}
      </TextInput>
    );
  },
);

SearchInput.displayName = NAME;
