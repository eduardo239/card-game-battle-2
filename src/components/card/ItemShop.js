import React from 'react';
import img from '../../assets/IMG.jpg';
import { ReactComponent as HpIcon } from '../../assets/uil_heart-sign.svg';
import { ReactComponent as MpIcon } from '../../assets/uil_flask-potion.svg';
import { ReactComponent as LvIcon } from '../../assets/uil_atom.svg';
import { ReactComponent as TpIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as TgIcon } from '../../assets/uil_pricetag-alt.svg';

const ItemShop = () => {
  return (
    <section>
      <div className='card'>
        <div className='card-poster'>
          <img src={img} alt='' />
          <span className='card-price'>
            <TgIcon /> <span>100.20</span>
          </span>
        </div>
        <div className='card-body'>
          <div>
            <h5>Nome do Item</h5>
          </div>
          <div>
            <p>A Wikipédia é um projeto de enciclopédia colaborativa.</p>
          </div>
          <div>
            <span className='card-item'>
              <HpIcon />
              <span>100</span>
            </span>
            <span className='card-item'>
              <MpIcon />
              <span>100</span>
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

export default ItemShop;
