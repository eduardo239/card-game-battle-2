import React from 'react';
import Dice from '../game/Dice';
import Positions from '../game/Positions';
import MenuGame from '../menu/Game';

const PageGame = () => {
  return (
    <section className='flex flex-column'>
      <MenuGame />
      <Dice />
      <Positions />
    </section>
  );
};

export default PageGame;
