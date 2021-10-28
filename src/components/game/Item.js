import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeItemModal } from '../../store/game';
import CardItem from '../card/Item';
import { isEmpty } from '../../util';
import { addItem } from '../../store/user';
import { unknown } from '../../util/constants';

const ModalUnknown = ({ type }) => {
  const dispatch = useDispatch();
  const { gift } = useSelector(state => state.game);
  const [showCard, setShowCard] = useState(false);

  const accept = () => {
    dispatch(addItem(gift));
    setShowCard(true);
  };

  const close = () => {
    dispatch(closeItemModal());
    setShowCard(false);
  };

  return (
    <section className='page-container'>
      <div className='page'>
        <h4>gift-or-gift ???</h4>
        {type}
        <div className='page-body'>
          {!showCard && <CardItem data={unknown} />}
          {showCard && !isEmpty(gift) && <CardItem data={gift} />}
        </div>
      </div>
      <div className='page-buttons'>
        {!showCard ? (
          <>
            <button
              className='btn btn-secondary'
              // onClick={() => dispatch(closeRewardModal())}
            >
              cancel
            </button>
            <button className='btn btn-primary' onClick={accept}>
              accept
            </button>
          </>
        ) : (
          <button className='btn btn-secondary' onClick={close}>
            close
          </button>
        )}
      </div>
    </section>
  );
};

export default ModalUnknown;
