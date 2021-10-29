import React from 'react';
import { useSelector } from 'react-redux';
// game
import Dice from '../game/Dice';
import Positions from '../game/Positions';
import MenuGame from '../menu/Game';
// modal
import Modal from '../modal/Modal';
import ModalShop from '../modal/ModalShop';
// position type
import Alert from '../messages/Alert';
import Fight from '../game/Fight';
import SelectMonster from '../game/SelectMonster';
import Item from '../game/Item';
import UseItem from '../modal/ModalUseItem';
// info
import InfoItem from '../info/Item';
import InfoMonster from '../info/Monster';
import InfoHero from '../info/Hero';
import InfoMap from '../info/Map';
// util
import { isEmpty } from '../../util';

const PageGame = () => {
  const {
    isSelectingMonster,
    isShopping,
    isFighting,
    isUnknown,
    isReward,
    isItem,
    isUsingItem
  } = useSelector(state => state.game.modal);
  const { items, monsters, hero } = useSelector(state => state.user);
  const { map } = useSelector(state => state.game);

  return (
    <section className='page-2'>
      <MenuGame />
      <div className='flex'>
        <Dice />
      </div>
      <Positions />
      <Modal show={isShopping}>
        <ModalShop />
      </Modal>
      <Modal show={isSelectingMonster}>
        <SelectMonster />
      </Modal>
      <Modal show={isFighting}>
        <Fight />
      </Modal>
      <Modal show={isReward}>
        <Item type='reward' />
      </Modal>
      <Modal show={isItem}>
        <Item type='item' />
      </Modal>
      <Modal show={isUnknown}>
        <Item type='unknown' />
      </Modal>
      <Modal show={isUsingItem}>
        <UseItem data={items} title='User Items' type='items' />
      </Modal>
      {/*  */}
      <div className='flex flex-column'>
        {!isEmpty(hero) ? <InfoHero data={hero} /> : null}

        {items.length > 0
          ? items.map((item, i) => <InfoItem key={i} data={item} index={i} />)
          : null}

        {monsters.length > 0
          ? monsters.map((monster, i) => (
              <InfoMonster key={i} data={monster} index={i} />
            ))
          : null}

        {!isEmpty(map) ? <InfoMap data={map} /> : null}
      </div>

      {/*  */}
      <Alert type='success' message='A map needs to be chosen' show={false} />
      <Alert type='success' message='A hero must be chosen' show={false} />
      <Alert
        type='success'
        message='Three monsters need to be chosen'
        show={false}
      />
    </section>
  );
};

export default PageGame;
