import React from 'react';

const Confirm = () => {
  return (
    <section className='modal-none'>
      <div className='modal-container'>
        <h4>Comprar este item?</h4>
        <div className='modal-container-body'>
          <button className='btn btn-secondary'>cancelar</button>
          <button className='btn btn-primary'>aceitar</button>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
