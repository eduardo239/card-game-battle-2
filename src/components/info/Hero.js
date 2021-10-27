import React from 'react';
import { ReactComponent as TiIcon } from '../../assets/uil_times.svg';
import { ReactComponent as UsIcon } from '../../assets/uil_user.svg';
import { ReactComponent as CeIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as HeIcon } from '../../assets/uil_heart-sign.svg';
import { ReactComponent as PoIcon } from '../../assets/uil_flask-potion.svg';
import { useDispatch } from 'react-redux';
import { removeHero } from '../../store/user';

const Hero = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <section className='list-item'>
      <span>
        <UsIcon className='icon-bg-light' /> {data?.name}
      </span>
      <span>
        <CeIcon className='icon-bg-light' /> {data?.type}
      </span>
      <span>
        <HeIcon className='icon-bg-light' /> {data?.hp}
      </span>
      <span>
        <PoIcon className='icon-bg-light' /> {data?.mp}
      </span>
      <button className='btn-icon mr-8' onClick={() => dispatch(removeHero())}>
        <TiIcon />
      </button>
    </section>
  );
};

export default Hero;
