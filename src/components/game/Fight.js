import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomHit, isEmpty } from '../../util';
import { heroMonsterDamage } from '../../store/user';
import { enemyMonsterDamage, toggleRewardModal } from '../../store/game';
import HeroCard from '../card/Hero';
import MonsterCard from '../card/Monster';

const Fight = () => {
  const dispatch = useDispatch();
  const { enemy } = useSelector(state => state.game);
  const { heroMonster } = useSelector(state => state.user);

  const dead = {
    id: 998,
    name: 'dead',
    description: 'x_x',
    rarity: 'x_x',
    type: 'x_x',
    price: 'x_x',
    value: 'x_x',
    image: '/img/items/potion_c_small.png',
    icon: 'fas fa-flask',
    poster: '/assets/cards/mo-dead.jpg'
  };

  React.useEffect(() => {
    if (enemy.hp <= 0 || heroMonster.hp <= 0) {
      console.log('end game');
      dispatch(toggleRewardModal());
    }
  }, [enemy, heroMonster, dispatch]);

  const fight = () => {
    dispatch(heroMonsterDamage({ damage: generateRandomHit(10, 25) }));
    dispatch(enemyMonsterDamage({ damage: generateRandomHit(10, 20) }));
  };

  return (
    <section className='page-container'>
      <div className='page'>
        <h4>Título da Página</h4>

        <div className='flex flex-space-between gap-10 flex-1'>
          {!isEmpty(heroMonster) ? (
            <HeroCard data={heroMonster} />
          ) : (
            <HeroCard data={dead} />
          )}
          hero
          <div className='flex-center-center'>
            <h1>VS</h1>
          </div>
          enemy
          {!isEmpty(enemy) ? (
            <MonsterCard data={enemy} />
          ) : (
            <MonsterCard data={dead} />
          )}
        </div>
      </div>
      <div className='page-buttons'>
        <div>
          <button className='btn btn-secondary'>Use Item</button>
          <button className='btn btn-primary' onClick={fight}>
            HIT
          </button>
          <button className='btn btn-secondary'>Flee</button>
        </div>
      </div>
    </section>
  );
};

export default Fight;
