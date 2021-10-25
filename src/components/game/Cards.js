import React from 'react';
import CardHero from '../card/Hero';
import CardMonster from '../card/Monster';
import CardMap from '../card/Map';
import CardItem from '../card/Item';
import CardItemShop from '../card/ItemShop';

const Cards = ({ title, data, type }) => {
  const mapOverHeroes = () => {
    return data.map(hero => {
      return (
        <CardHero key={hero.id} data={hero}>
          <div>
            <button className='btn btn-primary'>Selecionar</button>
          </div>
        </CardHero>
      );
    });
  };

  const mapOverMonsters = () => {
    return data.map(monster => {
      return (
        <CardMonster key={monster.id} data={monster}>
          <div>
            <button className='btn btn-primary'>Selecionar</button>
          </div>
        </CardMonster>
      );
    });
  };

  const mapOverMaps = () => {
    return data.map(maps => {
      return (
        <CardMap key={maps.id} data={maps}>
          <div>
            <button className='btn btn-primary'>Selecionar</button>
          </div>
        </CardMap>
      );
    });
  };

  const mapOverItems = () => {
    return data.map(item => {
      return (
        <CardItem key={item.id} data={item}>
          <div>
            <button className='btn btn-primary'>Selecionar</button>
          </div>
        </CardItem>
      );
    });
  };

  const mapOverItemsShop = () => {
    return data.map(item => {
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
      <div className='page'>
        <h4>{title}</h4>
        <div className='flex gap-10 flex-1'>
          {type === 'heroes' && data?.length > 0 && mapOverHeroes()}
          {type === 'monsters' && data?.length > 0 && mapOverMonsters()}
          {type === 'maps' && data?.length > 0 && mapOverMaps()}
          {type === 'items' && data?.length > 0 && mapOverItems()}
          {type === 'shop' && data?.length > 0 && mapOverItemsShop()}
        </div>
      </div>
      <div className='page-buttons'>
        <div>
          <button className='btn btn-secondary'>Cancelar</button>
          <button className='btn btn-primary'>OK</button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
