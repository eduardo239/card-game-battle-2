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
import InfoItem from '../info/Item';
import InfoMonster from '../info/Monster';
import { endGame } from '../../store/game';

const PageGame = () => {
  const dispatch = useDispatch();
  const { isSelectingMonster, isShopping, isUnknown, isFighting, isReward } =
    useSelector(state => state.game.modal);
  const { items, monsters } = useSelector(state => state.user);

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
      <Modal show={isUnknown}>
        <ModalUnknown />
      </Modal>
      {/*  */}
      <div className='flex flex-column'>
        {items.length > 0
          ? items.map((item, i) => <InfoItem key={i} data={item} index={i} />)
          : null}

        {monsters.length > 0
          ? monsters.map((monster, i) => (
              <InfoMonster key={i} data={monster} index={i} />
            ))
          : null}
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
