import propTypes from 'prop-types';

export const Button = ({ cb }) => {
  return (
    <button onClick={cb} className={CSS.Button}>
      Load more
    </button>
  );
};

ImageGallery.propTypes = {
  cb: propTypes.func.isRequired,
};
