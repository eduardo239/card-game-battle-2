import React from 'react';
import img from '../../assets/IMG.jpg';
import { ReactComponent as LvIcon } from '../../assets/uil_atom.svg';
import { ReactComponent as TpIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as SzIcon } from '../../assets/uil_arrows-h-alt.svg';

const Map = () => {
  return (
    <section>
      <div className='card'>
        <div className='card-poster'>
          <img src={img} alt='' />
        </div>
        <div className='card-body'>
          <div>
            <h5>Nome do Mapa</h5>
          </div>

          <div>
            <span className='card-item'>
              <SzIcon />
              <span>140</span>
            </span>
          </div>
          <div>
            <span className='card-item'>
              <LvIcon />
              <span>100</span>
            </span>
            <span className='card-item'>
              <TpIcon />
              <span>100</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
