import { useEffect, useState } from 'react';

import './css/App.css';

import HeroCard from './components/card/Hero';
import MonsterCard from './components/card/Monster';
import MapCard from './components/card/Map';
import ItemShopCard from './components/card/ItemShop';
import ItemCard from './components/card/Item';
import MenuGame from './components/menu/Game';
import PageFight from './components/game/Fight';
import Confirm from './components/modal/Confirm';
import PageGiftTrap from './components/game/GiftTrap';
import Positions from './components/game/Positions';

import Navigation from './components/ui/Navigation';
import {} from './store/user';
import {
  fetchHeroes,
  fetchItems,
  fetchMaps,
  fetchMonsters,
  getRandomNumber
} from './store/game';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';

import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';
import Page3 from './components/page/Page3';
import Page4 from './components/page/Page4';
import PageGame from './components/page/PageGame';
import PageShop from './components/page/PageShop';

import Alert from './components/messages/Alert';
import MenuPlay from './components/menu/Play';
import Dice from './components/game/Dice';
import Home from './components/page/Home';

function App() {
  const dispatch = useDispatch();

  const { isError, isLoading } = useSelector(state => state.game.status);
  const { dice } = useSelector(state => state.game);

  const [n, setN] = useState('');

  useEffect(() => {
    dispatch(fetchHeroes());
    dispatch(fetchMonsters());
    dispatch(fetchMaps());
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className='flex-center-center'>
      {/* status */}
      {isLoading && <div className='loading'>loading</div>}
      {isError && <div className='error'>Error</div>}

      {/* navigation */}
      <section>
        <Navigation />
      </section>

      {/* pages */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/page-1'>
          <Page1 />
        </Route>
        <Route path='/page-2'>
          <Page2 />
        </Route>
        <Route path='/page-3'>
          <Page3 />
        </Route>
        <Route path='/page-4'>
          <Page4 />
        </Route>
        <Route path='/page-5'>
          <PageGame />
        </Route>
        <Route path='/page-shop'>
          <PageShop />
        </Route>
      </Switch>

      <hr />

      <br />
      {/* alert */}
      <Alert type='success' message=' A simple primary alert—check it out!' />
      <Alert type='danger' message=' A simple primary alert—check it out!' />
      <Alert type='info' message=' A simple primary alert—check it out!' />

      <br />
      {/* position */}
      <Positions />
      <br />
      {/* menu */}
      <section className='flex'>
        <input
          value={n}
          onChange={e => setN(e.target.value)}
          placeholder='Meows..'
        />

        <button
          className='btn btn-secondary'
          onClick={() => dispatch(getRandomNumber(1, 6))}
        >
          random {dice}
        </button>
        <button className='btn btn-secondary'>if odd</button>
      </section>
      <br />
      {/* item */}
      <section>
        <Dice dice={dice} />
      </section>
      <br />
      {/* form */}
      <section>
        <div className='field'>
          <label htmlFor=''>Name</label>
          <input type='text' placeholder='Meows..' />
        </div>
        <div className='field'>
          <label htmlFor=''>Name</label>
          <input type='text' />
        </div>
        <div className='field'>
          <label htmlFor=''>Name</label>
          <input type='text' />
        </div>
        <button className='btn btn-primary'>start</button>
      </section>

      <br />
      {/* buttons */}
      <section>
        <button className='btn btn-primary'>start</button>
        <button className='btn btn-secondary'>start</button>
        <button className='btn btn-secondary'>next</button>
      </section>
      <br />
      {/* button size */}
      <section>
        <button className='btn btn-small btn-primary'>primary</button>
        <button className='btn btn-primary'>use item</button>
        <button className='btn btn-big btn-secondary'>primary</button>
      </section>
      <br />
      {/* button with icon */}
      <MenuGame />
      <MenuPlay />
      <br />
      {/* hero */}
      <HeroCard>
        <div>
          <button className='btn btn-primary'>Selecionar</button>
        </div>
      </HeroCard>
      <br />
      {/* monster */}
      <MonsterCard>
        <div>
          <button className='btn btn-primary'>Selecionar</button>
        </div>
      </MonsterCard>
      <br />
      {/* map */}
      <MapCard>
        <div>
          <button className='btn btn-primary'>Selecionar</button>
        </div>
      </MapCard>
      <br />
      {/* card shop */}
      <ItemShopCard>
        <div>
          <button className='btn btn-primary'>Comprar</button>
        </div>
      </ItemShopCard>
      <br />
      {/* item */}
      <ItemCard>
        <div>
          <button className='btn btn-primary'>Selecionar</button>
        </div>
      </ItemCard>
      <br />

      {/* item */}
      <Confirm />
      <br />

      {/* item */}
      <br />
      <PageGiftTrap />

      {/*  */}
      <br />
      <PageFight />
    </div>
  );
}

export default App;
