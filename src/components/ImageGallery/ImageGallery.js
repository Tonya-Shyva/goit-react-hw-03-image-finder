// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryItemStyled } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { ImageGalleryList } from './ImageGallery.styled';

export default function ImageGallery({ images, onSelect }) {
  return (
    <ImageGalleryList>
      {images.map((image, id) => (
        <GalleryItemStyled key={id}>
          <ImageGalleryItem image={image} onSelect={onSelect} />
        </GalleryItemStyled>
      ))}
    </ImageGalleryList>
  );
}

// ImageGallery.propTypes = {
//   children: PropTypes.array,
// };
