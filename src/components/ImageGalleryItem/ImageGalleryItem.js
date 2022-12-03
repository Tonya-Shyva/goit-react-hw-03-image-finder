import { GalleryItemStyled, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, tags }) => (
    <GalleryItemStyled key={id}>
      <ImageItem src={webformatURL} alt={tags} />
    </GalleryItemStyled>
  ));
};
