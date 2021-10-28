import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dice from '../game/Dice';
import Positions from '../game/Positions';
import MenuGame from '../menu/Game';
import Modal from '../modal/Modal';
import Alert from '../messages/Alert';
import ModalShop from '../modal/ModalShop';
import ModalFight from '../modal/ModalFight';
import ModalReward from '../modal/ModalReward';
import ModalSelectMonster from '../modal/ModalSelectMonster';
import ModalUnknown from '../modal/ModalUnknown';
import ModalItem from '../modal/ModalItem';
import InfoItem from '../info/Item';
import InfoMonster from '../info/Monster';
import InfoHero from '../info/Hero';
import InfoMap from '../info/Map';
import { endGame } from '../../store/game';
import { isEmpty } from '../../util';

const PageGame = () => {
  const dispatch = useDispatch();
  const {
    isSelectingMonster,
    isShopping,
    isUnknown,
    isFighting,
    isReward,
    isItem
  } = useSelector(state => state.game.modal);
  const { items, monsters, hero } = useSelector(state => state.user);
  const { map } = useSelector(state => state.game);
  console.log(items);
  return (
    <section className='flex flex-column'>
      <MenuGame />
      <Dice />
      <Positions />
      <Modal show={isShopping}>
        <ModalShop />
      </Modal>
      <Modal show={isSelectingMonster}>
        <ModalSelectMonster />
      </Modal>
      <Modal show={isFighting}>
        <ModalFight />
      </Modal>
      <Modal show={isReward}>
        <ModalReward />
      </Modal>
      <Modal show={isItem}>
        <ModalItem />
      </Modal>
      <Modal show={isUnknown}>
        <ModalUnknown />
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
