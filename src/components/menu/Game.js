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
import { ReactComponent as PlIcon } from '../../assets/uil_play.svg';
import { ReactComponent as SpIcon } from '../../assets/uil_shopping-cart.svg';
import { ReactComponent as RsIcon } from '../../assets/uil_backward.svg';

const MenuGame = () => {
  const dispatch = useDispatch();
  const [disable, setDisable] = React.useState(false);
  const { map } = useSelector(state => state.game);
  const { monsters, hero } = useSelector(state => state.user);

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
        disabled={disable || isEmpty(map) || monsters.length === 0}
      >
        JOGAR <PlIcon />
      </button>
      <button
        className='btn btn-secondary'
        disabled={disable || isEmpty(hero)}
        onClick={() => dispatch(toggleShopModal())}
      >
        loja <SpIcon />
      </button>
      <button
        className='btn btn-secondary'
        onClick={restarting}
        disabled={disable}
      >
        reiniciar <RsIcon />
      </button>
    </section>
  );
};

export default MenuGame;
