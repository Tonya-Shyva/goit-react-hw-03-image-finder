import { IconButton } from 'components/Button/IconButton';
import {
  SearchBarHeader,
  SearchBarInput,
  SearchForm,
} from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

const SearchBar = () => {
  return (
    <SearchBarHeader>
      <SearchForm /*onSubmit={}*/>
        <IconButton type="submit" aria-label="search button" /*onClick={}*/>
          <SearchIcon />
        </IconButton>

        <SearchBarInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarHeader>
  );
};

export default SearchBar;
