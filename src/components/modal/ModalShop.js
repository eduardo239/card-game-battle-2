import React from 'react';
import { useSelector } from 'react-redux';
import PageCards from '../game/Cards';

const Page4 = () => {
  const { items } = useSelector(state => state.game);
  const { gold } = useSelector(state => state.user);

  return (
    <section>
      <div className='flex'>
        <h4>Saldo: {gold}</h4>
      </div>
      <PageCards title='Shop !' data={items} type='shop' closeButton={true} />
    </section>
  );
};

export default Page4;
