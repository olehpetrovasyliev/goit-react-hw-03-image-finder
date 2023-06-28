// import propTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  state = {
    isOpen: false,
  };
  toggleModal = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  render() {
    const { src, alt } = this.props;
    return this.state.isOpen ? (
      <div className={CSS.Overlay} onClick={this.toggleModal}>
        <div className={CSS.Modal}>
          <img src={src} alt={alt} width="800px" height="600px" />
        </div>
      </div>
    ) : null;
  }
}
