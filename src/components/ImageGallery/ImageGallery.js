// import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';

export default function ImageGallery({ children }) {
  return <ImageGalleryList>{children}</ImageGalleryList>;
}

// ImageGallery.propTypes = {
//   children: PropTypes.array,
// };
