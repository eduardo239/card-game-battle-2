import React from 'react';
import img from '../../assets/IMG.jpg';
import { ReactComponent as HpIcon } from '../../assets/uil_heart-sign.svg';
import { ReactComponent as MpIcon } from '../../assets/uil_flask-potion.svg';
import { ReactComponent as LvIcon } from '../../assets/uil_atom.svg';
import { ReactComponent as TpIcon } from '../../assets/uil_cell.svg';
import { ReactComponent as TgIcon } from '../../assets/uil_pricetag-alt.svg';
import { ReactComponent as SzIcon } from '../../assets/uil_arrows-h-alt.svg';
import { ReactComponent as TmIcon } from '../../assets/uil_times.svg';
import { ReactComponent as NxIcon } from '../../assets/uil_arrow-right.svg';
import { ReactComponent as OnIcon } from '../../assets/uil_dice-one.svg';
import { ReactComponent as TwIcon } from '../../assets/uil_dice-two.svg';
import { ReactComponent as ThIcon } from '../../assets/uil_dice-three.svg';
import { ReactComponent as FoIcon } from '../../assets/uil_dice-four.svg';
import { ReactComponent as FiIcon } from '../../assets/uil_dice-five.svg';
import { ReactComponent as SiIcon } from '../../assets/uil_dice-six.svg';

const Hero = () => {
  return (
    <section>
      <div className='card'>
        <div className='card-poster'>
          <img src={img} alt='' />
        </div>
        <div className='card-body'>
          <div>
            <h5>Nome do Herói</h5>
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

export default Hero;
