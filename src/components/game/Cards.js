import React from 'react';
import CardHero from '../card/Hero';
import CardMonster from '../card/Monster';
import CardMap from '../card/Map';
import CardItem from '../card/Item';
import CardItemShop from '../card/ItemShop';
import { useDispatch, useSelector } from 'react-redux';
import { addHero, addItem, addMonster } from '../../store/user';
import { addMap, toggleShopModal } from '../../store/game';
import {
  POSITION_TYPE1,
  POSITION_TYPE2,
  POSITION_TYPE3
} from '../../util/constants';
import { isEmpty } from '../../util';

const Cards = ({ children, title, data, type, closeButton = false }) => {
  const dispatch = useDispatch();
  const {
    hero: he,
    monsters: ms,
    items: it
  } = useSelector(state => state.user);
  const { map: mp } = useSelector(state => state.game);

  const addMapAndGeneratePositions = map => {
    let positions = [];
    let arr;
    if (map.level === '1') {
      positions.push((arr = POSITION_TYPE1));
    } else if (map.level === '2') {
      positions.push((arr = POSITION_TYPE2));
    } else if (map.level === '3') {
      arr = POSITION_TYPE3;
    }
    for (let i = 0; i < map.size; i++) {
      positions.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    positions[0] = 'INIT';
    positions[positions.length - 1] = 'BOSS';

    dispatch(addMap({ map, positions }));
  };

  const mapOverHeroes = () => {
    return data?.map(hero => {
      return (
        <CardHero key={hero.id} data={hero}>
          <div>
            <button
              className='btn btn-primary'
              onClick={() => dispatch(addHero(hero))}
              disabled={!isEmpty(he)}
            >
              Selecionar
            </button>
          </div>
        </CardHero>
      );
    });
  };

  const mapOverMonsters = () => {
    return data?.map((monster, i) => {
      return (
        <CardMonster key={monster.id} data={monster} index={i}>
          <div>
            <button
              className='btn btn-primary'
              onClick={() => dispatch(addMonster(monster))}
              disabled={ms.length >= 3}
            >
              Selecionar
            </button>
          </div>
        </CardMonster>
      );
    });
  };

  const mapOverMaps = () => {
    return data?.map((map, i) => {
      return (
        <CardMap key={map.id} data={map} index={i}>
          <div>
            <button
              className='btn btn-primary'
              onClick={() => addMapAndGeneratePositions(map)}
              disabled={!isEmpty(mp)}
            >
              Selecionar
            </button>
          </div>
        </CardMap>
      );
    });
  };

  const mapOverItems = () => {
    return data?.map((item, i) => {
      return (
        <CardItem key={item.id} data={item} index={i}>
          <div>
            <button
              className='btn btn-primary'
              onClick={() => dispatch(addItem(item, i))}
              disabled={it.length >= 1}
            >
              Selecionar
            </button>
          </div>
        </CardItem>
      );
    });
  };

  const mapOverItemsShop = () => {
    return data?.map(item => {
      return (
        <CardItemShop key={item.id} data={item}>
          <div>
            <button className='btn btn-primary'>Comprar</button>
          </div>
        </CardItemShop>
      );
    });
  };

  return (
    <section className='page-container'>
      {closeButton && (
        <button
          className='btn btn-primary absolute-top-right'
          onClick={() => dispatch(toggleShopModal())}
        >
          close
        </button>
      )}
      <div className='page'>
        <h4>{title}</h4>
        <div className='page-body'>
          {type === 'heroes' && data?.length > 0 && mapOverHeroes()}
          {type === 'monsters' && data?.length > 0 && mapOverMonsters()}
          {type === 'maps' && data?.length > 0 && mapOverMaps()}
          {type === 'items' && data?.length > 0 && mapOverItems()}
          {type === 'shop' && data?.length > 0 && mapOverItemsShop()}
        </div>
      </div>
      <div className='page-buttons'>{children}</div>
    </section>
  );
};

export default Cards;
