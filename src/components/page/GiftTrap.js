import React from 'react';
import HeroCard from '../card/Hero';
import MonsterCard from '../card/Monster';
import ItemCard from '../card/Item';
import MapCard from '../card/Map';

const GiftTrap = () => {
  return (
    <section className='page-container'>
      <div className='page'>
        <h4>Título da Página</h4>
        <div className='flex-center-center gap-10'>
          <h1>????</h1>
        </div>
      </div>
      <div className='page-buttons'>
        <div>
          <button className='btn btn-secondary'>Cancelar</button>
          <button className='btn btn-primary'>OK</button>
        </div>
      </div>
    </section>
  );
};

export default GiftTrap;
