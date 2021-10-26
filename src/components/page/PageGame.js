import React from 'react';
import Dice from '../game/Dice';
import Positions from '../game/Positions';
import MenuGame from '../menu/Game';
import ModalShop from '../modal/Modal';

const PageGame = () => {
  return (
    <section className='flex flex-column'>
      <MenuGame />
      <Dice />
      <Positions />
      <ModalShop show={true} />
    </section>
  );
};

export default PageGame;
