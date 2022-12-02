import { Component } from 'react';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import SearchBar from 'components/Searchbar/Searchbar';
import AppContainer from './App.styled';

export class App extends Component {
  state = {
    shownModal: false,
  };

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
