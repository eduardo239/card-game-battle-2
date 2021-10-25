import React from 'react';
import HeroCard from '../card/Hero';
import MonsterCard from '../card/Monster';

const Fight = () => {
  return (
    <section className='page-container'>
      <div className='page'>
        <h4>Título da Página</h4>
        <div className='flex flex-space-between gap-10 flex-1'>
          <HeroCard />
          <div className='flex-center-center'>
            <h1>VS</h1>
          </div>
          <MonsterCard />
        </div>
      </div>
      <div className='page-buttons'>
        <div>
          <button className='btn btn-secondary'>Usar Item</button>
          <button className='btn btn-primary'>OK</button>
          <button className='btn btn-secondary'>Fugir</button>
        </div>
      </div>
    </section>
  );
};

export default Fight;
