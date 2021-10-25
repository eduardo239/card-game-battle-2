import React from 'react';
import { ReactComponent as TiIcon } from '../../assets/uil_times.svg';
import { ReactComponent as PoIcon } from '../../assets/uil_flask-potion.svg';

const Hero = () => {
  return (
    <section className='list-item'>
      <span>
        <b>
          <PoIcon className='icon-bg-light' />{' '}
        </b>
        Health Potion
      </span>
      <span>
        <b>Descrição: </b> Aumenta a vida do personagem em 50%
      </span>
      <span>
        <b>Tipo: </b>HEALTH
      </span>

      <span>
        <b>Valor: </b>99
      </span>
      <button className='btn-icon'>
        <TiIcon />
      </button>
    </section>
  );
};

export default Hero;
