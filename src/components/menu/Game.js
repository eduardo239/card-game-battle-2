import React from 'react';
import { useDispatch } from 'react-redux';
import { getRandomNumber } from '../../store/game';
import { TIME_DELAY } from '../../util/constants';

const MenuGame = () => {
  const dispatch = useDispatch();
  const [disable, setDisable] = React.useState(false);

  const play = () => {
    let time = TIME_DELAY;

    dispatch(getRandomNumber(1, 6));
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, time * 10);
  };

  return (
    <section className='flex'>
      <button
        className='btn btn-primary'
        onClick={() => play()}
        disabled={disable}
      >
        JOGAR
      </button>
      <button className='btn btn-secondary'>loja</button>
      <button className='btn btn-secondary'>sair</button>
    </section>
  );
};

export default MenuGame;
