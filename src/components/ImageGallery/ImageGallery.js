// import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';

export default function ImageGallery({ children, onImageClick }) {
  return <ImageGalleryList onClick={onImageClick}>{children}</ImageGalleryList>;
}

// ImageGallery.propTypes = {
//   children: PropTypes.array,
// };
