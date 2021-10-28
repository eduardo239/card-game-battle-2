import React from 'react';

const Modal = ({ children, show, type }) => {
  return (
    <section className={`${show ? 'modal-show' : 'modal-none'}`}>
      {children}
    </section>
  );
};

export default Modal;
