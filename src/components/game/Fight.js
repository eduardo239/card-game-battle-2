import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomNumberInterval, isEmpty } from '../../util';
import { heroMonsterDamage, addGold } from '../../store/user';
import {
  enemyMonsterDamage,
  closeFightingModal,
  getPrize,
  toggleUseItemModal
} from '../../store/game';
import HeroCard from '../card/Hero';
import MonsterCard from '../card/Monster';
import { unknown } from '../../util/constants';

const Fight = () => {
  const dispatch = useDispatch();
  const { enemy, enemyMonsterDown, heroMonsterDown } = useSelector(
    state => state.game
  );
  const { monsters, heroMonsterIndex, items } = useSelector(
    state => state.user
  );

  const fight = () => {
    dispatch(heroMonsterDamage({ damage: randomNumberInterval(5, 10) }));
    dispatch(enemyMonsterDamage({ damage: randomNumberInterval(50, 95) }));
  };

  const useItem = () => {
    dispatch(toggleUseItemModal());
  };

  useEffect(() => {
    if (heroMonsterDown) {
      dispatch(closeFightingModal({ gift: false }));
      dispatch(getPrize({ won: false, gold: 0 }));
    } else if (enemyMonsterDown) {
      dispatch(closeFightingModal({ gift: true }));
      const gold = randomNumberInterval(30, 60);
      dispatch(getPrize({ won: true, gold }));
      dispatch(addGold(gold));
    }
  }, [heroMonsterDown, enemyMonsterDown, dispatch]);

  return (
    <section className='page-container'>
      <div className='page'>
        <h4>Título da Página</h4>

        <div className='page-body'>
          {!isEmpty(monsters[heroMonsterIndex]) ? (
            <HeroCard data={monsters[heroMonsterIndex]} />
          ) : (
            <HeroCard data={unknown} />
          )}
          vs
          {!isEmpty(enemy) ? (
            <MonsterCard data={enemy} />
          ) : (
            <MonsterCard data={unknown} />
          )}
        </div>
      </div>
      <div className='page-buttons'>
        <div>
          <button
            className='btn btn-secondary'
            onClick={useItem}
            disabled={items.length === 0}
          >
            Use Item
          </button>
          <button className='btn btn-primary' onClick={fight}>
            HIT
          </button>
          <button
            className='btn btn-secondary'
            onClick={() => dispatch(closeFightingModal({ gift: false }))}
          >
            Flee
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fight;
