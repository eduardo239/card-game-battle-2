import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeEnemy,
  toggleRewardModal,
  changeEnemyDown
} from '../../store/game';
import { changeHeroDown } from '../../store/user';

const ModalUnknown = () => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(toggleRewardModal());
    dispatch(removeEnemy());
    dispatch(changeHeroDown(false));
    dispatch(changeEnemyDown(false));
  };
  return (
    <section className='page-container'>
      <div className='page mw-700'>
        <h4>end ...</h4>
        <div className='page-body'>end</div>
      </div>
      <div className='page-buttons'>
        <button className='btn btn-primary' onClick={close}>
          ok
        </button>
      </div>
    </section>
  );
};

export default ModalUnknown;
