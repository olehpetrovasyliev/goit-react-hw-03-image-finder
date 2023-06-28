// import propTypes from 'prop-types';
// import { Component } from 'react';
import css from './Modal.module.css';

export const Modal = ({ src, alt, onClick }) => {
  return (
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={src} alt={alt} width="800px" height="600px" />
      </div>
    </div>
  );
};
//for git
