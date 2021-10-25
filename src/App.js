import { useState } from 'react';

import './css/App.css';

import { ReactComponent as OnIcon } from './assets/uil_dice-one.svg';
import { ReactComponent as TwIcon } from './assets/uil_dice-two.svg';
import { ReactComponent as ThIcon } from './assets/uil_dice-three.svg';
import { ReactComponent as FoIcon } from './assets/uil_dice-four.svg';
import { ReactComponent as FiIcon } from './assets/uil_dice-five.svg';
import { ReactComponent as SiIcon } from './assets/uil_dice-six.svg';

import HeroCard from './components/card/Hero';
import MonsterCard from './components/card/Monster';
import MapCard from './components/card/Map';
import ItemShopCard from './components/card/ItemShop';
import ItemCard from './components/card/Item';
import MenuGame from './components/menu/Game';
import PageCards from './components/game/Cards';
import PageFight from './components/game/Fight';
import Confirm from './components/modal/Confirm';
import PageGiftTrap from './components/game/GiftTrap';
import Positions from './components/game/Positions';

import { selectUserName, setUserName } from './store/user';
import { selectName } from './store/game';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './components/ui/Navigation';
import { Route, Switch } from 'react-router';

import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';
import Page3 from './components/page/Page3';
import Page4 from './components/page/Page4';
import Page5 from './components/page/Page5';

import InfoHero from './components/info/Hero';
import InfoMonster from './components/info/Monster';
import InfoItem from './components/info/Item';

function App() {
  const userName = useSelector(selectUserName);
  const gameName = useSelector(selectName);
  const dispatch = useDispatch();

  const [n, setN] = useState('');

  return (
    <div className='flex-center-center'>
      {/* navigation */}
      <section>
        <Navigation />
      </section>
      {/* pages */}
      <Switch>
        <Route exact path='/'>
          <Page1 />
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
          <Page5 />
        </Route>
      </Switch>
      <br />
      {/* info */}
      <section className='list'>
        <InfoHero />
        <InfoHero />
        <InfoMonster />
        <InfoItem />
        <InfoItem />
        <InfoItem />
      </section>
      <br />
      <section>
        <h3>{gameName}</h3>
        <p>{userName}</p>
      </section>
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
          className='btn btn-primary'
          onClick={() => dispatch(setUserName(n))}
        >
          mudar nome para {n}
        </button>
        <button className='btn btn-secondary'>dec</button>
        <button className='btn btn-secondary'>if odd</button>
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
      <br />
      {/* hero */}
      <HeroCard />
      <br />
      {/* monster */}
      <MonsterCard />
      <br />
      {/* map */}
      <MapCard />
      <br />
      {/* card shop */}
      <ItemShopCard />
      <br />
      {/* item */}
      <ItemCard />
      <br />
      {/* item */}
      <section>
        <OnIcon className='dice' />
        <TwIcon className='dice' />
        <ThIcon className='dice' />
        <FoIcon className='dice-active' />
        <FiIcon className='dice' />
        <SiIcon className='dice' />
      </section>
      <br />
      {/* item */}
      <Confirm />
      <br />
      {/* item */}
      <PageCards />
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
