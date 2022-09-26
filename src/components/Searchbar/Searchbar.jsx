import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import {
  Header,
  Searchform,
  SearchButton,
  BtnIco,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    seqrchQuery: '',
  };

  handleInputChange = e => {
    this.setState({ seqrchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSearchSubmit = e => {
    e.preventDefault();

    if (this.state.seqrchQuery.trim(' ') === '') {
      alert('There is nothing to find', {
        clickToClose: true,
      });
      return;
    }

    this.props.onSubmit(this.state.seqrchQuery);
    this.setState({ seqrchQuery: '' });
  };

  render() {
    return (
      <Header>
        <Searchform onSubmit={this.handleSearchSubmit}>
          <SearchButton type="submit">
            <BtnIco>
              <GoSearch />
            </BtnIco>
          </SearchButton>

          <Input
            value={this.state.seqrchQuery}
            onChange={this.handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Searchform>
      </Header>
    );
  }
}