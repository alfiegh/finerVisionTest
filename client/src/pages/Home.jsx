import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      style={{ height: '80vh' }}
      className='d-flex justify-content-center align-items-center flex-column'
    >
      <p className='pb-3 text-center'>
        Welcome, this is a test site to showcase a potential employer. Please do
        not put real information as this is stored in a DB.
      </p>
      <h1 style={{ fontSize: '80px' }}>Home</h1>
      <div
        style={{ width: '200px' }}
        className='d-flex justify-content-between pt-5'
      >
        <Link
          style={{ textDecoration: 'none', fontSize: '25px' }}
          to='/register'
        >
          Register
        </Link>
        <Link style={{ textDecoration: 'none', fontSize: '25px' }} to='/people'>
          People
        </Link>
      </div>
    </div>
  );
};

export default Home;
