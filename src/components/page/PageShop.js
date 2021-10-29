import React from 'react';
import { useSelector } from 'react-redux';
import PageCards from '../game/Cards';

const Page4 = () => {
  const { items } = useSelector(state => state.game);
  const { gold } = useSelector(state => state.user);

  return (
    <section>
      <PageCards title='Shop !' data={items} type='shop' closeButton={false} />
    </section>
  );
};

export default Page4;
