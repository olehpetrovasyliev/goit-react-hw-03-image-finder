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
  render() {
    const { src, alt, url } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
          <img src={src} alt={alt} className={css.ImageGalleryItemImage} />
        </li>
        {isOpen ? (
          <Modal onClick={this.toggleModal} src={url} alt={alt}>
            <img />
          </Modal>
        ) : null}
      </>
    );
  }
}

// ImageGalleryItem.propTypes = {
//   children: propTypes.node.isRequired,
// };
