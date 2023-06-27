import propTypes from 'prop-types';

export const Modal = ({ src, alt, cb }) => {
  return (
    <div className={CSS.Overlay} onClick={cb}>
      <div className={CSS.Modal}>
        <img src={src} alt={alt} width="800px" height="600px" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  cb: propTypes.func,
};
