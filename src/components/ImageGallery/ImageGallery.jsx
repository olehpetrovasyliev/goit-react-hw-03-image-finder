import propTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ arr }) => {
  return (
    <ul className={CSS.ImageGallery}>
      {arr.map(el => (
        <ImageGalleryItem
          src={el.webformatURL}
          alt={el.collections}
          key={el.id}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  arr: propTypes.arrayOf(propTypes.object).isRequired,
};
