import React from 'react';
// eslint-disable-next-line no-unused-vars
import poster_default from '../../assets/IMG.jpg';
import { ReactComponent as HpIcon } from '../../assets/uil_heart-sign.svg';
import { ReactComponent as MpIcon } from '../../assets/uil_flask-potion.svg';
import { ReactComponent as LvIcon } from '../../assets/uil_atom.svg';
import { ReactComponent as TpIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as TgIcon } from '../../assets/uil_pricetag-alt.svg';

const ItemShop = ({ children, data }) => {
  return (
    <section>
      <div className='card'>
        <div className='card-poster'>
          <img src={process.env.PUBLIC_URL + data?.poster} alt={data?.name} />
          <span className='card-price'>
            <TgIcon /> <span>{data?.price}</span>
          </span>
        </div>
        <div className='card-body'>
          <div>
            <h5>{data?.name}</h5>
          </div>
          <div>
            <p>{data?.description}</p>
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
              <span>{data?.rarity}</span>
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

export default ItemShop;
