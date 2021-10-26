import React from 'react';
// eslint-disable-next-line no-unused-vars
import poster_default from '../../assets/IMG.jpg';
import { ReactComponent as LvIcon } from '../../assets/uil_atom.svg';
import { ReactComponent as TpIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as SzIcon } from '../../assets/uil_arrows-h-alt.svg';

const Map = ({ children, data }) => {
  return (
    <section>
      <div className='card'>
        <div className='card-poster'>
          <img src={process.env.PUBLIC_URL + data?.poster} alt={data?.name} />
        </div>
        <div className='card-body'>
          <div>
            <h5>{data?.name}</h5>
          </div>

          <div>
            <span className='card-item'>
              <SzIcon />
              <span>{data?.size}</span>
            </span>
          </div>
          <div>
            <span className='card-item'>
              <LvIcon />
              <span>{data?.level}</span>
            </span>
            <span className='card-item'>
              <TpIcon />
              <span>{data?.type}</span>
            </span>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Map;
