import React from 'react';
import { TIME_DELAY } from '../../util/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPosition, getRandomNumber } from '../../store/game';
import { toggleShopModal } from '../../store/game';
import { isEmpty } from '../../util';

const MenuGame = () => {
  const dispatch = useDispatch();
  const [disable, setDisable] = React.useState(false);
  const { map } = useSelector(state => state.user);

  const play = () => {
    let time = TIME_DELAY;

    dispatch(getRandomNumber(1, 6));
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
      dispatch(getNewPosition());
    }, time * 10);
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
      <button className='btn btn-secondary' disabled={disable}>
        sair
      </button>
    </section>
  );
};

export default MenuGame;
