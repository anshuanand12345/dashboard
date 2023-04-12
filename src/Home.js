import React from 'react';
import Head from './Head';
import Main from './Main';
import './Home.css';

const Home = () => {
  return (
    <>
        <div className='mainpoint'>
            <Head />
            <Main />
        </div>
    </>
  )
}

export default Home;