import React from 'react';
import { TIME_DELAY } from '../../util/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  getNewPosition,
  toggleShopModal,
  getRandomNumber,
  restart as GR,
  checkPositionType
} from '../../store/game';
import { restart as UR } from '../../store/user';
import { isEmpty } from '../../util';

const MenuGame = () => {
  const dispatch = useDispatch();
  const [disable, setDisable] = React.useState(false);
  const { map } = useSelector(state => state.game);

  const play = () => {
    let time = TIME_DELAY;

    dispatch(getRandomNumber(1, 6));
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
      dispatch(getNewPosition());

      dispatch(checkPositionType());
    }, time * 10);
  };

  const restarting = () => {
    dispatch(GR());
    dispatch(UR());
  };

  return (
    <section className='flex'>
      <button
        className='btn btn-primary'
        onClick={() => play()}
        disabled={disable || isEmpty(map)}
      >
        JOGAR
      </button>
      <button
        className='btn btn-secondary'
        disabled={disable}
        onClick={() => dispatch(toggleShopModal())}
      >
        loja
      </button>
      <button
        className='btn btn-secondary'
        onClick={restarting}
        disabled={disable}
      >
        reiniciar
      </button>
    </section>
  );
};

export default MenuGame;
