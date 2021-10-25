import React from 'react';
import { useSelector } from 'react-redux';
import PageCards from '../game/Cards';

const Page3 = () => {
  const { maps } = useSelector(state => state.game);
  return (
    <section>
      <PageCards title='Select the Maps' data={maps} type='maps' />
    </section>
  );
};

export default Page3;
