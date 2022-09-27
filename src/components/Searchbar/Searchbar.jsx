import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { GoSearch } from 'react-icons/go';
import {
  Header,
  Searchform,
  SearchButton,
  BtnIco,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();

    if (query.trim(' ') === '') {
      Notify.warning('There is nothing to find', {
        clickToClose: true,
      });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Header>
      <Searchform onSubmit={handleSearchSubmit}>
        <SearchButton type="submit">
          <BtnIco>
            <GoSearch />
          </BtnIco>
        </SearchButton>

        <Input
          value={query}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Searchform>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
