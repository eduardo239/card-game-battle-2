import React from 'react';
import { ReactComponent as TiIcon } from '../../assets/uil_times.svg';
import { ReactComponent as FlIcon } from '../../assets/uil_flask.svg';
import { ReactComponent as AtIcon } from '../../assets/uil_atom.svg';
import { ReactComponent as CeIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as DoIcon } from '../../assets/uil_document-info.svg';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/user';

const Item = ({ data, index }) => {
  const dispatch = useDispatch();

  return (
    <section className='list-item'>
      <span>
        <FlIcon className='icon-bg-light' /> {data?.name}
      </span>
      <span>
        <DoIcon className='icon-bg-light' /> {data?.description}
      </span>
      <span>
        <CeIcon className='icon-bg-light' /> {data?.type}
      </span>

      <span>
        <AtIcon className='icon-bg-light' /> {data?.value}
      </span>
      <button
        className='btn-icon mr-8'
        onClick={() => dispatch(removeItem(index))}
      >
        <TiIcon />
      </button>
    </section>
  );
};

export default Item;
