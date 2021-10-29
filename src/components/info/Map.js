import React from 'react';
import { ReactComponent as TiIcon } from '../../assets/uil_times.svg';
import { ReactComponent as MpIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as CeIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as SzIcon } from '../../assets/uil_arrows-h-alt.svg';
import { ReactComponent as PoIcon } from '../../assets/uil_flask-potion.svg';
import { useDispatch } from 'react-redux';
import { removeMap } from '../../store/game';

const Map = ({ data, index }) => {
  const dispatch = useDispatch();

  return (
    <section className='list-item'>
      <span>
        <MpIcon className='icon-bg-light' /> {data?.name}
      </span>

      <span>
        <SzIcon className='icon-bg-light' />
        {data?.size}
      </span>
      <span>
        <CeIcon className='icon-bg-light' /> {data?.type}
      </span>
      <span>
        <PoIcon className='icon-bg-light' /> {data?.value}
      </span>
      <span>
        <button className='btn-icon' onClick={() => dispatch(removeMap(index))}>
          <TiIcon />
        </button>
      </span>
    </section>
  );
};

export default Map;
