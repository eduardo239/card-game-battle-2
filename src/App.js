import './css/App.css';
import img from './assets/IMG.jpg';
import { ReactComponent as HpIcon } from './assets/uil_heart-sign.svg';
import { ReactComponent as MpIcon } from './assets/uil_flask-potion.svg';
import { ReactComponent as LvIcon } from './assets/uil_atom.svg';
import { ReactComponent as TpIcon } from './assets/uil_cell.svg';
import { ReactComponent as TgIcon } from './assets/uil_pricetag-alt.svg';
import { ReactComponent as SzIcon } from './assets/uil_arrows-h-alt.svg';
import { ReactComponent as TmIcon } from './assets/uil_times.svg';
import { ReactComponent as NxIcon } from './assets/uil_arrow-right.svg';
import { ReactComponent as OnIcon } from './assets/uil_dice-one.svg';
import { ReactComponent as TwIcon } from './assets/uil_dice-two.svg';
import { ReactComponent as ThIcon } from './assets/uil_dice-three.svg';
import { ReactComponent as FoIcon } from './assets/uil_dice-four.svg';
import { ReactComponent as FiIcon } from './assets/uil_dice-five.svg';
import { ReactComponent as SiIcon } from './assets/uil_dice-six.svg';
//
import HeroCard from './components/card/Hero';
import MonsterCard from './components/card/Monster';
import MapCard from './components/card/Map';
import ItemShopCard from './components/card/ItemShop';
import ItemCard from './components/card/Item';
import MenuGame from './components/menu/Game';
import PageCards from './components/page/Cards';
import PageFight from './components/page/Fight';
import Confirm from './components/modal/Confirm';
import PageGiftTrap from './components/page/GiftTrap';
import Positions from './components/page/Positions';

function App() {
  return (
    <div className='flex-center-center'>
      <section>
        <h1>Game App</h1>
      </section>
      <br />
      {/* position */}
      <Positions />
      <br />
      {/* menu */}
      <section className='flex'>
        <button className='btn btn-primary'>JOGAR</button>
        <button className='btn btn-secondary'>loja</button>
        <button className='btn btn-secondary'>sair</button>
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
