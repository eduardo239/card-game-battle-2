import React from 'react';
import { ReactComponent as EnIcon } from '../../assets/icon-park-outline_ghost.svg';
import { ReactComponent as GfIcon } from '../../assets/icon-park-outline_gift.svg';
import { ReactComponent as MdIcon } from '../../assets/icon-park-outline_medicine-bottle.svg';
import { ReactComponent as BsIcon } from '../../assets/icon-park-outline_toxins.svg';

const Positions = () => {
  return (
    <section className='positions-container'>
      <div className='positions'>
        <div className='po init'>init</div>
        <div className='po fight'>
          <EnIcon className='dash' />
        </div>
        <div className='po fight '>
          <EnIcon className='blink' />
        </div>

        <div className='po item'>
          <MdIcon className='dash' />
        </div>

        <div className='po none'>...</div>
        <div className='po none'>
          <GfIcon className='dash' />
        </div>

        <div className='po fight'>
          <MdIcon />
        </div>

        <div className='po boss'>
          <BsIcon className='dash' />
        </div>
      </div>
    </section>
  );
};

export default Positions;
