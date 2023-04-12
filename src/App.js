
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Users from './Users'
import Home from './Home';
import View from './View';
import Analytics from './Analytics';
import Calender from './Calender';
import Overview from './Overview';
import Policy from './Policy';
import Data from './Data';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<Users />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/calender" element={<Calender />}></Route>
        <Route path="/review" element={<Overview />}></Route>
        <Route path="/projection" element={<Analytics />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/data" element={<Data />}></Route>
      </Routes>
      <div className='header'>
        <Header />
      </div>
      <div className='screen'>
        <Sidebar />
        <div className='maincenter'>
          
        </div>
      </div>
    </div>
  )
}

export default App;