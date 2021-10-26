import { useEffect } from 'react';

import './css/App.css';

import Navigation from './components/ui/Navigation';

import {
  fetchHeroes,
  fetchItems,
  fetchMaps,
  fetchMonsters
} from './store/game';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router';

import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';
import Page3 from './components/page/Page3';
import Page4 from './components/page/Page4';
import PageGame from './components/page/PageGame';
import PageShop from './components/page/PageShop';

import Home from './components/page/Home';

function App() {
  const dispatch = useDispatch();

  const { isError, isLoading } = useSelector(state => state.game.status);

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

      {/* <Alert type='success' message=' A simple primary alert—check it out!' />
      <Alert type='danger' message=' A simple primary alert—check it out!' />
      <Alert type='info' message=' A simple primary alert—check it out!' /> */}

      {/* <section>
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
      </section> */}

      {/* <section>
        <button className='btn btn-primary'>start</button>
        <button className='btn btn-secondary'>start</button>
        <button className='btn btn-secondary'>next</button>
      </section> */}

      {/* <MenuGame />
      <MenuPlay /> */}
      <section>
        <div className='card'>
          <div className='card-poster'>
            <img
              src={process.env.PUBLIC_URL + '/assets/items/po-sm-hp.jpg'}
              alt='123123123'
            />
          </div>
          <div className='card-body'>
            <div>
              <h5>HELA</h5>
            </div>
            <div>
              <span className='card-item'>
                <span>100</span>
              </span>
              <span className='card-item'>
                <span>100</span>
              </span>
            </div>
            <div>
              <span className='card-item'>
                <span>100</span>
              </span>
              <span className='card-item'>
                <span>WIND</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
