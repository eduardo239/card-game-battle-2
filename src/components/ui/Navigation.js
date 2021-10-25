import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/page-1'>Page 1</Link>
      </li>
      <li>
        <Link to='/page-2'>Page 2</Link>
      </li>
      <li>
        <Link to='/page-3'>Page 3</Link>
      </li>
      <li>
        <Link to='/page-4'>Page 4</Link>
      </li>
      <li>
        <Link to='/page-5'>Page Game</Link>
      </li>
    </ul>
  );
};

export default Navigation;
