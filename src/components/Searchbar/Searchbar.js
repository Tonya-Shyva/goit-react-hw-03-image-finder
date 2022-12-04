import PropTypes from 'prop-types';
import { Component } from 'react';

import { IconButton } from 'components/Button/IconButton';
import {
  SearchBarHeader,
  SearchBarInput,
  SearchForm,
} from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleValueChange = event => {
    this.setState({
      searchValue: event.currentTarget.value.trim(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <IconButton type="submit" aria-label="search button">
            <SearchIcon />
          </IconButton>

          <SearchBarInput
            type="text"
            name="searchValue"
            value={this.state.searchValue}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleValueChange}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func,
};
