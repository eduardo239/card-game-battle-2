import React from 'react';
import { useSelector } from 'react-redux';
import PageCards from '../game/Cards';

const Page4 = () => {
  const { items } = useSelector(state => state.game);
  return (
    <section>
      <PageCards title='Shop !' data={items} type='shop' />
    </section>
  );
};

export default Page4;
