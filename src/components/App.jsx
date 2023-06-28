import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { imagesApi } from 'services/apiGet';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
// import css from '../index.css';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    q: '',
    loading: false,
    modalOpen: false,
    showBtn: false,
  };
  fetchData = async () => {
    const { page } = this.state;
    // const;
    try {
      this.setState({ loading: true });
      const data = await imagesApi({
        q: this.state.q,
        page: this.state.page,
      });

      this.setState(prev => ({
        images: [...prev.images, ...data.data.hits],
        // showBtn: page < Math.ceil(total_results / 15),
      }));
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleChangeQuery = q => {
    this.setState({ q, images: [], page: 1, loading: false, modalOpen: false });
  };
  // componentWillUnmount() {}
  componentDidUpdate = (_, prevState) => {
    const { q, page } = this.state;
    if (q !== prevState.q || page !== prevState.page) {
      this.fetchData();
    }
  };
  handleBtnClick = () => {
    this.setState(prewState => ({
      page: prewState.page + 1,
    }));
    // this.fetchData();
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery} />

        <>
          {this.state.loading && <Loader />}

          <ImageGallery arr={this.state.images} onClick={this.toggleModal} />

          {this.state.showBtn && <Button cb={this.handleBtnClick} />}
          {this.modalOpen && <Modal onClick={this.toggleModal} />}
        </>
      </>
    );
  }
}
