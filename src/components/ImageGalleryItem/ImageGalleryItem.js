import { GalleryItemStyled, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onImageClick }) => {
  return images.map(({ id, webformatURL, tags }) => (
    <GalleryItemStyled key={id} onClick={onImageClick}>
      <ImageItem src={webformatURL} alt={tags} />
    </GalleryItemStyled>
  ));
};
