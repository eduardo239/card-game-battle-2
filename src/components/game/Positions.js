import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as EnIcon } from '../../assets/icon-park-outline_ghost.svg';
import { ReactComponent as GfIcon } from '../../assets/icon-park-outline_gift.svg';
import { ReactComponent as MdIcon } from '../../assets/icon-park-outline_medicine-bottle.svg';
import { ReactComponent as BsIcon } from '../../assets/icon-park-outline_toxins.svg';

const Positions = () => {
  const { positions } = useSelector(state => state.user);
  const { position: p } = useSelector(state => state.game);

  return (
    <section className='positions-container'>
      <div className='positions'>
        <>
          {positions.length > 0
            ? positions.map((position, i) => (
                <div
                  key={i}
                  className={`po ${
                    position === 'ITEM'
                      ? 'item'
                      : position === 'FIGHT'
                      ? 'fight'
                      : position === '???'
                      ? 'unknown'
                      : position === 'BOSS'
                      ? 'boss'
                      : position === '_'
                      ? 'none'
                      : position === 'INIT'
                      ? 'init'
                      : 'none'
                  } ${p === i ? 'current' : p > i ? 'passed' : ''}`}
                >
                  {p <= i ? (
                    <>
                      {position === 'ITEM' ? (
                        <MdIcon className='dash' />
                      ) : position === 'FIGHT' ? (
                        <EnIcon className='dash' />
                      ) : position === '???' ? (
                        <GfIcon className='dash' />
                      ) : position === 'BOSS' ? (
                        <BsIcon className='dash' />
                      ) : position === 'INIT' ? (
                        'INIT'
                      ) : (
                        '-'
                      )}
                    </>
                  ) : (
                    '...'
                  )}
                </div>
              ))
            : null}
        </>
      </div>
    </section>
  );
};

export default Positions;
