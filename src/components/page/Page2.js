import React from 'react';
import { useSelector } from 'react-redux';
import PageCards from '../game/Cards';

const Page2 = () => {
  const { monsters } = useSelector(state => state.game);

  return (
    <section>
      <PageCards title='Select the Monsters' data={monsters} type='monsters' />
    </section>
  );
};

export default Page2;
