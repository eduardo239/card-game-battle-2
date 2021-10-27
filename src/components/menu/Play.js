import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MenuPlay = () => {
  return (
    <section className='flex'>
      <button className='btn btn-primary'>ATACAR</button>
      <button className='btn btn-secondary'>Usar Item</button>
      <button className='btn btn-secondary'>Trocar de Monstro</button>
    </section>
  );
};

export default MenuPlay;
