import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../card/Item';
import { userUseItem } from '../../store/user';
import { toggleUseItemModal } from '../../store/game';

const ModalUseItem = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.user);
  // const [showCard, setShowCard] = useState(false);

  const handleUseItem = (item, i) => {
    dispatch(userUseItem({ item, i }));
    dispatch(toggleUseItemModal());
  };

  const handleClose = () => {
    dispatch(toggleUseItemModal());
  };

  const mapOverItems = () => {
    return items?.map((item, i) => {
      return (
        <CardItem key={item.id} data={item} index={i}>
          <div>
            <button
              className='btn btn-primary'
              onClick={() => handleUseItem({ item, i })}
            >
              Use
            </button>
          </div>
        </CardItem>
      );
    });
  };
  // heroMonsterIndex

  return (
    <section className='page-container'>
      <div className='page'>
        <h4>use item ...</h4>
        <div className='page-body'> {items?.length > 0 && mapOverItems()}</div>
      </div>
      <div className='page-buttons'>
        <button className='btn btn-primary' onClick={() => handleClose()}>
          cancel
        </button>
      </div>
    </section>
  );
};

export default ModalUseItem;
