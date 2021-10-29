import React from 'react';
import { ReactComponent as OnIcon } from '../../assets/uil_dice-one.svg';
import { ReactComponent as TwIcon } from '../../assets/uil_dice-two.svg';
import { ReactComponent as ThIcon } from '../../assets/uil_dice-three.svg';
import { ReactComponent as FoIcon } from '../../assets/uil_dice-four.svg';
import { ReactComponent as FiIcon } from '../../assets/uil_dice-five.svg';
import { ReactComponent as SiIcon } from '../../assets/uil_dice-six.svg';
import { useSelector } from 'react-redux';

const Dice = () => {
  const { dice } = useSelector(state => state.game);
  return (
    <section className='mt-10 mb-10 mb-dice'>
      <OnIcon className={`dice ${dice === 1 ? 'dice-active' : ''}`} />
      <TwIcon className={`dice ${dice === 2 ? 'dice-active' : ''}`} />
      <ThIcon className={`dice ${dice === 3 ? 'dice-active' : ''}`} />
      <FoIcon className={`dice ${dice === 4 ? 'dice-active' : ''}`} />
      <FiIcon className={`dice ${dice === 5 ? 'dice-active' : ''}`} />
      <SiIcon className={`dice ${dice === 6 ? 'dice-active' : ''}`} />
    </section>
  );
};

export default Dice;
