import React from 'react';
import { ReactComponent as TiIcon } from '../../assets/uil_times.svg';
import { ReactComponent as UsIcon } from '../../assets/uil_user.svg';
import { ReactComponent as CeIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as HeIcon } from '../../assets/uil_heart-sign.svg';
import { ReactComponent as PoIcon } from '../../assets/uil_flask-potion.svg';
import { ReactComponent as GoIcon } from '../../assets/uil_money-bill.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeHero } from '../../store/user';

const Hero = ({ data }) => {
  const dispatch = useDispatch();
  const { gold } = useSelector(state => state.user);

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
      <span>
        <GoIcon className='icon-bg-light' /> {gold ? gold : 0}
      </span>
      <span>
        <button className='btn-icon ' onClick={() => dispatch(removeHero())}>
          <TiIcon />
        </button>
      </span>
    </section>
  );
};

export default Hero;
