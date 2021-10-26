import React from 'react';
import Shop from '../page/PageShop';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShopModal } from '../../store/game';

const Modal = () => {
  const { isShopModalOpen } = useSelector(state => state.game.status);
  const dispatch = useDispatch();

  return (
    <section className={`${isShopModalOpen ? 'modal-show' : 'modal-none'}`}>
      <button
        className='btn btn-secondary'
        onClick={() => dispatch(toggleShopModal())}
      >
        close
      </button>
      <Shop />
    </section>
  );
};

export default Modal;
