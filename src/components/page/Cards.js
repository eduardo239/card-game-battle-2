import React from 'react';
import HeroCard from '../card/Hero';
import MonsterCard from '../card/Monster';
import ItemCard from '../card/Item';
import MapCard from '../card/Map';

const Cards = () => {
  return (
    <section className='page-container'>
      <div className='page'>
        <h4>Título da Página</h4>
        <div className='flex gap-10'>
          <HeroCard />
          <ItemCard />
          <MonsterCard />
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

export default Cards;
