import propTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={CSS.ImageGalleryItem}>
      <img src={src} alt={alt} />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   children: propTypes.node.isRequired,
// };
