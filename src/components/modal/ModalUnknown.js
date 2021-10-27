import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomItem, toggleUnknownModal } from '../../store/game';
import CardItem from '../card/Item';
import { isEmpty } from '../../util';
import { addItem } from '../../store/user';
const ModalUnknown = () => {
  const dispatch = useDispatch();
  const { trickOrTreating } = useSelector(state => state.game);

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
    dispatch(addItem(trickOrTreating));
    setShowCard(!showCard);
  };

  return (
    <section className='page-container'>
      <div className='page'>
        <h4>trick-or-treating ???</h4>
        <div className='page-body'>
          {!showCard && <CardItem data={unknown} />}
          {showCard && !isEmpty(trickOrTreating) && (
            <CardItem data={trickOrTreating} />
          )}
        </div>
      </div>
      <div className='page-buttons'>
        {!showCard ? (
          <>
            <button
              className='btn btn-secondary'
              onClick={() => dispatch(toggleUnknownModal())}
            >
              cancel
            </button>
            <button className='btn btn-primary' onClick={() => accept()}>
              accept
            </button>
          </>
        ) : (
          <button
            className='btn btn-secondary'
            onClick={() => dispatch(toggleUnknownModal())}
          >
            close
          </button>
        )}
      </div>
    </section>
  );
};

export default ModalUnknown;
