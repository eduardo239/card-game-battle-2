import React from 'react';
import { useSelector } from 'react-redux';
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

const PageGame = () => {
  const { isSelectingMonster, isShopping, isUnknown, isFighting, isReward } =
    useSelector(state => state.game.modal);

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
