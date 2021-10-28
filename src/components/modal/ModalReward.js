import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeEnemy,
  closeRewardModal,
  changeEnemyDown
} from '../../store/game';
import { changeHeroDown } from '../../store/user';

const ModalUnknown = () => {
  const dispatch = useDispatch();
  const { won, gold } = useSelector(state => state.game.hero);

  const close = () => {
    dispatch(closeRewardModal());
    dispatch(removeEnemy());
    dispatch(changeHeroDown(false));
    dispatch(changeEnemyDown(false));
  };
  return (
    <section className='page-container'>
      <div className='page mw-700'>
        <h4>end ...{won ? 'won' : 'lost'} </h4>
        <p>{gold ? `You got ${gold} gold` : 'You got nothing'}</p>
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
