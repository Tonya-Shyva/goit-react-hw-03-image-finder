import { ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onSelect }) => {
  return (
    <ImageItem
      src={image.webformatURL}
      alt={image.tags}
      onClick={() => onSelect(image.largeImageURL, image.tags)}
    />
  );
};
