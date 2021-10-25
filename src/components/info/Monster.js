import React from 'react';
import { ReactComponent as TiIcon } from '../../assets/uil_times.svg';
import { ReactComponent as MoIcon } from '../../assets/uil_robot.svg';
import { ReactComponent as CeIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as HeIcon } from '../../assets/uil_heart-sign.svg';
import { ReactComponent as PoIcon } from '../../assets/uil_flask-potion.svg';

const Hero = () => {
  return (
    <section className='list-item'>
      <span>
        <MoIcon className='icon-bg-light' /> Wisdom
      </span>
      <span>
        <CeIcon className='icon-bg-light' /> WIND
      </span>
      <span>
        <HeIcon className='icon-bg-light' /> 100
      </span>
      <span>
        <PoIcon className='icon-bg-light' /> 99
      </span>
      <button className='btn-icon'>
        <TiIcon />
      </button>
    </section>
  );
};

export default Hero;
