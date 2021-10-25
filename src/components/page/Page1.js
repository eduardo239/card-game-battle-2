import React from 'react';
import { useSelector } from 'react-redux';
import PageCards from '../game/Cards';

const Page1 = () => {
  const { heroes } = useSelector(state => state.game);

  return (
    <section>
      <PageCards title='Select the Hero' data={heroes} type='heroes' />
    </section>
  );
};

export default Page1;
