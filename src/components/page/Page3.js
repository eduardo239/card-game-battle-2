import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from '../../util';
import { ReactComponent as BaIcon } from '../../assets/uil_arrow-left.svg';
import { ReactComponent as NxIcon } from '../../assets/uil_arrow-right.svg';
import InfoMap from '../info/Map';
import PageCards from '../game/Cards';

const Page3 = () => {
  const { maps, map } = useSelector(state => state.game);

  return (
    <section>
      <PageCards title='Select 1 the Map' data={maps} type='maps'>
        <div>
          <Link to='/page-2'>
            <button className='btn btn-secondary'>
              Back <BaIcon />
            </button>
          </Link>
          <Link to='/page-4'>
            <button className='btn btn-primary'>
              Next <NxIcon />
            </button>
          </Link>
        </div>
      </PageCards>
      {isEmpty(map) ? null : <InfoMap data={map} />}
    </section>
  );
};

export default Page3;
