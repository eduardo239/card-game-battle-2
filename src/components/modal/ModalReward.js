import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRewardModal } from '../../store/game';
// import {  } from '../../store/game';

const ModalUnknown = () => {
  const dispatch = useDispatch();

  return (
    <section className='page-container'>
      <div className='page mw-700'>
        <h4>end ...</h4>
        <div className='page-body'>end</div>
      </div>
      <div className='page-buttons'>
        <button
          className='btn btn-primary'
          onClick={() => dispatch(toggleRewardModal())}
        >
          ok
        </button>
      </div>
    </section>
  );
};

export default ModalUnknown;
