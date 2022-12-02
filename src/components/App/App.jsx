import { Component } from 'react';
import axios from 'axios';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import SearchBar from 'components/Searchbar/Searchbar';
import AppContainer from './App.styled';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30150514-c6c2592e7290a81c416aa6291';
// let trimmedValue = 'cat';
// let pageNumber = 1;

export class App extends Component {
  state = {
    images: [],
    shownModal: false,
  };

  async componentDidMount(/*trimmedValue, pageNumber*/) {
    const response = await axios.get(
      `/?key=${API_KEY}&q="cat"&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=1`
    );
    this.setState({ images: response.data.hits });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <AppContainer>
        <SearchBar></SearchBar>
        {/* якщо data.hits.length >0 рендеримо список */}
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
