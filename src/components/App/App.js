import { Component } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import SearchBar from 'components/Searchbar/Searchbar';
import AppContainer from './App.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import Loader from 'components/Loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30150514-c6c2592e7290a81c416aa6291';

export class App extends Component {
  state = {
    searchValue: '',
    pageNumber: 1,
    images: [],
    isLoading: false,
    shownModal: false,
  };

  async componentDidMount(/*trimmedValue, pageNumber*/) {
    const { searchValue, pageNumber } = this.state;
    this.setState({
      isLoading: true,
    });
    const response = await axios.get(
      `/?key=${API_KEY}&q=${searchValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${pageNumber}`
    );
    this.setState({
      searchValue: searchValue,
      images: response.data.hits,
      isLoading: false,
    });
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal } = this.state;
    return (
      <AppContainer>
        <SearchBar onFormSubmit={this.handleFormSubmit}></SearchBar>
        {/* якщо data.hits.length >0 рендеримо список */}
        {images.length > 0 ? (
          <ImageGallery>
            <ImageGalleryItem images={images}></ImageGalleryItem>
          </ImageGallery>
        ) : (
          <Loader />
        )}
        <ImageGallery></ImageGallery>
        {showModal && (
          <Modal /*children={hit.url, alt}*/ onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={2000} position="top-left" theme="dark" />
      </AppContainer>
    );
  }
}
