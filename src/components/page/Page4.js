import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PageCards from '../game/Cards';
import InfoItem from '../info/Item';
import { ReactComponent as BaIcon } from '../../assets/uil_arrow-left.svg';
import { ReactComponent as NxIcon } from '../../assets/uil_arrow-right.svg';

const Page4 = () => {
  const { items } = useSelector(state => state.game);
  const { items: userItems } = useSelector(state => state.user);

  return (
    <section>
      <PageCards
        title='Select 1 the Item'
        data={items.slice(0, 3)}
        type='items'
      >
        <div>
          <Link to='/page-4'>
            <button className='btn btn-secondary'>
              Back <BaIcon />
            </button>
          </Link>
          <Link to='/page-5'>
            <button className='btn btn-primary'>
              Next <NxIcon />
            </button>
          </Link>
        </div>
      </PageCards>
      {userItems.length > 0
        ? userItems.map((item, i) => <InfoItem key={i} data={item} index={i} />)
        : null}
    </section>
  );
};

export default Page4;
