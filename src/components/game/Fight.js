import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomNumberInterval, isEmpty } from '../../util';
import { heroMonsterDamage, addGold } from '../../store/user';
import {
  enemyMonsterDamage,
  closeFightingModal,
  toggleRewardModal
} from '../../store/game';
import HeroCard from '../card/Hero';
import MonsterCard from '../card/Monster';

const Fight = () => {
  const dispatch = useDispatch();
  const { enemy, enemyDown } = useSelector(state => state.game);
  const { monsters, heroMonsterIndex, heroMonsterDown } = useSelector(
    state => state.user
  );

  const { gold } = useSelector(state => state.game.hero);

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

  const fight = () => {
    dispatch(
      heroMonsterDamage({ damage: generateRandomNumberInterval(5, 10) })
    );
    dispatch(
      enemyMonsterDamage({ damage: generateRandomNumberInterval(50, 95) })
    );
  };

  useEffect(() => {
    if (heroMonsterDown) {
      alert('You lost!');
      dispatch(closeFightingModal());
      dispatch(toggleRewardModal({ won: false, gold: 0 }));
    } else if (enemyDown) {
      alert('You won!');
      dispatch(closeFightingModal());
      const gold = generateRandomNumberInterval(30, 60);
      dispatch(toggleRewardModal({ won: true, gold }));
      dispatch(addGold(gold));
    }
  }, [heroMonsterDown, enemyDown, dispatch]);

  return (
    <section className='page-container'>
      <div className='page'>
        <h4>Título da Página</h4>

        <div className='flex flex-space-between gap-10 flex-1'>
          {!isEmpty(monsters[heroMonsterIndex]) ? (
            <HeroCard data={monsters[heroMonsterIndex]} />
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
          <button
            className='btn btn-secondary'
            onClick={() => dispatch(closeFightingModal())}
          >
            Flee
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fight;
