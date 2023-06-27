import propTypes from 'prop-types';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChangeValue = ({ target }) => {
    this.setState({ inputValue: target.value });
  };
  handleSumbit = (e, query) => {
    e.preventDefault();
    // this.props.handleChangeQuery(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <header className={CSS.searchbar}>
        <form className={CSS.SearchForm} onSubmit={this.handleSumbit}>
          <button type="submit" className={CSS.SearchForm_button}>
            <span className={CSS.button_label}>Search</span>
          </button>

          <input
            className={CSS.SearchForm_input}
            type="text"
            autoComplete="off"
            value={this.state.value}
            autoFocus
            placeholder="Search images and photos"
            name="searcher"
          />
        </form>
      </header>
    );
  }
}

// cb={this.handleSumbit}
