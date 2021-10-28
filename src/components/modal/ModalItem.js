import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeRewardModal, generateRandomItem } from '../../store/game';
import CardItem from '../card/Item';
import { isEmpty } from '../../util';
import { addItem } from '../../store/user';
const ModalUnknown = () => {
  const dispatch = useDispatch();
  const { gift } = useSelector(state => state.game);

  const [showCard, setShowCard] = useState(false);

  const unknown = {
    id: 999,
    name: 'Unknown',
    description: '???',
    rarity: '???',
    type: '???',
    price: '???',
    value: '???',
    image: '/img/items/potion_c_small.png',
    icon: 'fas fa-flask',
    poster: '/assets/cards/unknown.jpg'
  };

  const accept = () => {
    dispatch(generateRandomItem());
    if (!isEmpty(gift)) dispatch(addItem(gift));
    setShowCard(true);
  };

  const close = () => {
    dispatch(closeRewardModal());
    setShowCard(false);
  };

  return (
    <section className='page-container'>
      <div className='page'>
        <h4>gift-or-gift ???</h4>
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
              onClick={() => dispatch(closeRewardModal())}
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
