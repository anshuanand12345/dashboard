import React from 'react';
import './Main.css';
import BarChartIcon from '@mui/icons-material/BarChart';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
     <div className='center'>
              <Link to="/Analytics" style={{ textDecoration: 'none' }} className='box'>
            <BarChartIcon className='con' />
            <h1>Analytics</h1>
        </Link>
              <div className='box'>
                  <HorizontalSplitIcon className='con'/>
                  <h1>Most Recent Zips</h1>
              </div>
              <div className='box'>
                  <ImageIcon className='con' />
                  <h1>Snaps</h1>
              </div>
              <div className='box'>
                  <OndemandVideoIcon className='con' />
                  <h1>Zip Monitor</h1>
              </div>
              <div className='box'>
                  <DashboardCustomizeIcon className='con' />
                  <h1>Customiser</h1>
              </div>
              <div className='box'>
                  <SettingsIcon className='con' />
                  <h1>User Settings</h1>
              </div>
     </div>
    </>
  )
}

export default Main;