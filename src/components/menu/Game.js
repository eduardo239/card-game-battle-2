import React from 'react';

import { ReactComponent as TmIcon } from '../../assets/uil_times.svg';
import { ReactComponent as NxIcon } from '../../assets/uil_arrow-right.svg';

const MenuGame = () => {
  return (
    <section className='flex'>
      <button className='btn btn-primary'>JOGAR</button>
      <button className='btn btn-secondary'>loja</button>
      <button className='btn btn-secondary'>sair</button>
    </section>
  );
};

export default MenuGame;
