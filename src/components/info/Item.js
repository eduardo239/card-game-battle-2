import React from 'react';
import { ReactComponent as TiIcon } from '../../assets/uil_times.svg';
import { ReactComponent as FlIcon } from '../../assets/uil_flask.svg';
import { ReactComponent as AtIcon } from '../../assets/uil_atom.svg';
import { ReactComponent as CeIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as DoIcon } from '../../assets/uil_document-info.svg';

const Hero = () => {
  return (
    <section className='list-item'>
      <span>
        <FlIcon className='icon-bg-light' /> Health Potion (50)
      </span>
      <span>
        <DoIcon className='icon-bg-light' /> Cura 50 de HP
      </span>
      <span>
        <CeIcon className='icon-bg-light' /> HEALTH
      </span>

      <span>
        <AtIcon className='icon-bg-light' /> 99
      </span>
      <button className='btn-icon'>
        <TiIcon />
      </button>
    </section>
  );
};

export default Hero;
