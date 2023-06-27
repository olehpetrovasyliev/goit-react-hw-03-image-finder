import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { imagesApi } from 'services/apiGet';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    q: '',
    showBtn: false,
    loading: false,
  };
  fetchData = async () => {
    const data = await imagesApi({
      q: this.state.q,
      page: this.state.page,
    });

    this.setState({ images: data.data.hits });
  };
  componentDidMount() {
    this.fetchData();
  }
  handleChangeQuery = (e) => {
    this.setState({ q: e.target.value })
    componentDidUpdate = (_, prevState) => {
      const { query, page } = this.state;
      if (query !== prevState.query || page !== prevState.page) {
        this.fetchData();
      }
    }
    // componentWillUnmount() {}

    handleBtnClick = () => {
      this.setState(prewState => ({
        page: prewState.page + 1,
      }));
      this.fetchData();
    };

    render() {
      return (
        <>
          <Searchbar />
          <ImageGallery arr={this.state.images} />
        </>
      )
    }
    
      
    }
  }
