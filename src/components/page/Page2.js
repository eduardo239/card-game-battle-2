import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PageCards from '../game/Cards';
import InfoMonster from '../info/Monster';
import { ReactComponent as BaIcon } from '../../assets/uil_arrow-left.svg';
import { ReactComponent as NxIcon } from '../../assets/uil_arrow-right.svg';

const Page2 = () => {
  const { monsters } = useSelector(state => state.game);
  const { monsters: userMonsters } = useSelector(state => state.user);

  return (
    <section>
      <PageCards title='Select 3 the Monsters' data={monsters} type='monsters'>
        <div>
          <Link to='/page-1'>
            <button className='btn btn-secondary'>
              Back <BaIcon />
            </button>
          </Link>
          <Link to='/page-3'>
            <button className='btn btn-primary'>
              Next <NxIcon />
            </button>
          </Link>
        </div>
      </PageCards>
      {userMonsters.length > 0
        ? userMonsters.map((monster, i) => (
            <InfoMonster key={i} data={monster} index={i} />
          ))
        : null}
    </section>
  );
};

export default Page2;
