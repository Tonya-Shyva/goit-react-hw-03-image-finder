import React, { Component } from 'react';

// контейнер для error повідомлень--------------------
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  handleSubmit = async e => {
    console.log(e);
    this.setState({ isLoading: true, images: [] });
    if (e.trim() === '') {
      return;
    }
    const response = await getImagesApi(e, 1);
    console.log(response);
    if (response.length === 0) {
      toast.info('Please, enter another search value!');
    }
    this.setState({
      images: response,
      isLoading: false,
      searchValue: e,
      pageNumber: 1,
    });
  };

  handleLoadMore = async () => {
    this.setState({ isLoading: true });
    const response = await getImagesApi(
      this.state.searchValue,
      this.state.pageNumber + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      pageNumber: this.state.pageNumber + 1,
      isLoading: false,
    });
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
    const { images, selectedImg, modalImgAlt, isLoading } = this.state;
    return (
      <AppContainer>
        <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>

        {images.length !== [] ? (
          <React.Fragment>
            {isLoading && <Loader />}
            <React.Fragment>
              <ImageGallery
                images={images}
                onSelect={this.selectImg}
              ></ImageGallery>
              {images.length < 12 ? null : (
                <Button onClick={this.handleLoadMore} />
              )}
            </React.Fragment>
            }
          </React.Fragment>
        ) : (
          <img
            src="https://cdn.boldomatic.com/content/post/5F1KHw/Let-the-search-begin?size=800"
            alt="let's begining"
            height={300}
            width={300}
          />
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
