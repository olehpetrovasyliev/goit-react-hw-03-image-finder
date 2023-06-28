import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleyItem.module.css';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };
  toggleModal = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };
  handleKeydown = e => {
    if (e.key === 'Escape') {
      this.toggleModal();
    }
    // console.log(e);
  };
  render() {
    const { src, alt, url } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            src={src}
            alt={alt}
            className={css.ImageGalleryItemImage}
            onClick={this.toggleModal}
          />
        </li>
        {isOpen ? (
          <Modal
            onKeydown={this.handleKeydown}
            onClose={this.toggleModal}
            src={url}
            alt={alt}
          ></Modal>
        ) : null}
      </>
    );
  }
}

// ImageGalleryItem.propTypes = {
//   children: propTypes.node.isRequired,
// };
