import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='page-1 mb-home gap-20'>
      <h1>CARD GAME BATTLE</h1>
      <div className='flex-end'>
        <Link to='/page-1'>
          <button className='btn btn-primary'>Start</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
