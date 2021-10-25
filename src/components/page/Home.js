import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>GAME CARD BATTLE</h1>
      <div className='flex'>
        <Link to='/page-1'>
          <button className='btn btn-primary'>Start</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
