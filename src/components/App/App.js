import { Component } from 'react';
import axios from 'axios';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import SearchBar from 'components/Searchbar/Searchbar';
import AppContainer from './App.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import Loader from 'components/Loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30150514-c6c2592e7290a81c416aa6291';
let trimmedValue = 'cat';
let pageNumber = 1;

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    shownModal: false,
  };

  async componentDidMount(/*trimmedValue, pageNumber*/) {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `/?key=${API_KEY}&q=${trimmedValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${pageNumber}`
    );
    this.setState({
      images: response.data.hits,
      isLoading: false,
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal } = this.state;
    return (
      <AppContainer>
        <SearchBar></SearchBar>
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
      </AppContainer>
    );
  }
}
