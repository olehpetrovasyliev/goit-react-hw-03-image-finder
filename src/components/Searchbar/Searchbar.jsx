import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChangeValue = ({ target }) => {
    this.setState({ inputValue: target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="css" className={css.SearchForm_button}>
            <span className={css.button_label}>Search</span>
          </button>

          <input
            className={CSS.SearchForm_input}
            type="text"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChangeValue}
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
