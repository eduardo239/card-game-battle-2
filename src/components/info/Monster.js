import React from 'react';
import { ReactComponent as TiIcon } from '../../assets/uil_times.svg';
import { ReactComponent as MoIcon } from '../../assets/uil_robot.svg';

const Hero = () => {
  return (
    <section className='list-item'>
      <span>
        <b>
          <MoIcon className='icon-bg-light' />{' '}
        </b>
        Wisdom
      </span>
      <span>
        <b>Tipo: </b>WIND
      </span>
      <span>
        <b>HP: </b>100
      </span>
      <span>
        <b>MP: </b>99
      </span>
      <button className='btn-icon'>
        <TiIcon />
      </button>
    </section>
  );
};

export default Hero;
