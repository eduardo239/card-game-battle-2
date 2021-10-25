import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from '../../util';
import PageCards from '../game/Cards';
import InfoHero from '../info/Hero';
import { ReactComponent as BaIcon } from '../../assets/uil_arrow-left.svg';
import { ReactComponent as NxIcon } from '../../assets/uil_arrow-right.svg';

const Page1 = () => {
  const { heroes } = useSelector(state => state.game);
  const { hero } = useSelector(state => state.user);

  return (
    <section>
      <PageCards title='Select 1 the Hero' data={heroes} type='heroes'>
        <div>
          <Link to='/'>
            <button className='btn btn-secondary'>
              Back <BaIcon />
            </button>
          </Link>
          <Link to='/page-2'>
            <button className='btn btn-primary'>
              Next <NxIcon />
            </button>
          </Link>
        </div>
      </PageCards>

      {isEmpty(hero) ? null : <InfoHero data={hero} />}
    </section>
  );
};

export default Page1;
