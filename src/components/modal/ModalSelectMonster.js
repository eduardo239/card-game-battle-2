import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleIsFightingModal,
  toggleSelectMonsterModal
} from '../../store/game';
import { addMonsterToFight } from '../../store/user';
import { isEmpty } from '../../util';
import CardMonster from '../card/Monster';

const ModalSelectMonster = () => {
  const dispatch = useDispatch();
  const { monsters, heroMonster } = useSelector(state => state.user);

  const select = (monster, i) => {
    dispatch(addMonsterToFight({ monster, i }));
  };

  const next = () => {
    dispatch(toggleSelectMonsterModal());
    dispatch(toggleIsFightingModal());
  };

  const mapOverMonsters = () => {
    return monsters?.map((monster, i) => {
      return (
        <CardMonster key={i} data={monster} index={i}>
          <div>
            <button
              className='btn btn-primary'
              onClick={() => select(monster, i)}
              disabled={!isEmpty(heroMonster)}
            >
              Selecionar
            </button>
          </div>
        </CardMonster>
      );
    });
  };

  return (
    <section className='page-container'>
      <div className='page'>
        <h4>select 1 monster </h4>
        <div className='page-body'>
          {monsters.length > 0 && mapOverMonsters()}
        </div>
      </div>
      <div className='page-buttons'>
        <button
          className='btn btn-primary'
          onClick={() => next()}
          disabled={isEmpty(heroMonster)}
        >
          fight
        </button>
      </div>
    </section>
  );
};

export default ModalSelectMonster;
