import React, { Component } from 'react';

// контейнер для error повідомлень--------------------
import { ToastContainer } from 'react-toastify';
// --------------------------------------------------
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import SearchBar from 'components/Searchbar/Searchbar';
import AppContainer from './App.styled';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import Loader from 'components/Loader/Loader';
import { getImagesApi } from 'components/utils/getImagesApi';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    searchValue: '',
    pageNumber: 1,
    images: [],
    isLoading: false,
    selectedImg: null,
    modalImgAlt: '',
  };

  async componentDidMount(/*trimmedValue, pageNumber*/) {
    const { searchValue, pageNumber } = this.state;
    this.setState({
      isLoading: true,
    });
    const response = await getImagesApi(searchValue, pageNumber);
    console.log(response);
    this.setState({
      searchValue: searchValue,
      images: response,
      isLoading: false,
    });
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  selectImg = (imgUrl, altTag) => {
    this.setState({ selectedImg: imgUrl, modalImgAlt: altTag });
  };

  closeModal = () => {
    this.setState({
      selectedImg: '',
      modalImgAlt: '',
    });
  };

  render() {
    const { images, selectedImg, modalImgAlt } = this.state;
    return (
      <AppContainer>
        <SearchBar onFormSubmit={this.handleFormSubmit}></SearchBar>
        {/* якщо data.hits.length >0 рендеримо список */}
        {images.length > 0 ? (
          <React.Fragment>
            <ImageGallery
              images={images}
              onSelect={this.selectImg}
            ></ImageGallery>
            <Button onClick={this.handleClickMore} />
          </React.Fragment>
        ) : (
          <Loader />
        )}
        {selectedImg && (
          <Modal onClose={this.closeModal}>
            <img src={selectedImg} alt={modalImgAlt} />
          </Modal>
        )}
        <ToastContainer autoClose={2000} position="top-left" theme="dark" />
      </AppContainer>
    );
  }
}
