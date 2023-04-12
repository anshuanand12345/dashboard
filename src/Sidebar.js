import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import EmailIcon from '@mui/icons-material/Email';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PolicyIcon from '@mui/icons-material/Policy';
import BarChartIcon from '@mui/icons-material/BarChart';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import './Sidebar.css';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Sidebar = () => {

      const [isOpen, setisOpen] = useState(false);
      const [newdisplay, setnewdisplay] = useState(true);
      const toggle = () => {
            setisOpen(!isOpen);
      }

      const toggleOff = () => {
            setisOpen(!isOpen);
            setnewdisplay(!newdisplay);
           
      }
      const showdata = () => {
            setnewdisplay(!newdisplay);
      }
      return (
            <aside>
                  <div className='icons'>

                        <div>
                              <h6> Web</h6>
                        </div>

                        <div className='board' onMouseEnter={toggle} onMouseLeave={toggleOff} style={{ width: isOpen ? "250px" : "60px" }}>
                              <div className='dashboard'>
                                    <AppsIcon className='icon' />
                                    <h2> Dashboard </h2>
                              </div>

                              <div className='dashboard'>
                                    <AppSettingsAltIcon className='icon' />
                                    <Link to="/" style={{ textDecoration: 'none' }}>

                                          <div className='setup'>
                                                <h2> Setup

                                                      <ul style={{ display: newdisplay ? "none" : "block" , width: isOpen?"140px": "0px" }}>
                                                            

                                                      </ul>
                                                </h2>
                                                <ArrowForwardIosIcon className='arrowforward' onClick={showdata} />
                                          </div>


                                    </Link>

                              </div>

                              <div className='dashboard'>
                                    <EmailIcon className='icon' />
                                    <h2> Mail </h2>
                              </div>

                              <div className='dashboard'>
                                    <ColorLensIcon className='icon' />
                                    <h2> Color </h2>
                              </div>



                              <div className='dashboard'>
                                    <PeopleAltIcon className='icon' />
                                    <Link to="/user" style={{ textDecoration: 'none' }}>
                                          <h2> People </h2>
                                    </Link>
                              </div>



                              <div className='dashboard'>
                                    <PolicyIcon className='icon' />
                                    <Link to="/Policy" style={{ textDecoration: 'none' }}>
                                    <h2>  Policy </h2>
                                    </Link>
                              </div>

                              <div className='dashboard' >
                                    
                                    <DoubleArrowIcon className='icon' />
                                    <Link to="/review" style={{ textDecoration: 'none' }}>
                                       <h2> Overview </h2>
                                    </Link>
                              </div>

                              <div className='dashboard' >
                                    <CalendarMonthIcon className='icon' />
                                    <Link to="/calender" style={{ textDecoration: 'none' }}>
                                          <h2> Calender </h2>
                                    </Link>
                              </div>

                              <div className='dashboard' >
                                    <BarChartIcon className='icon' />
                                    <Link to="/projection" style={{ textDecoration: 'none' }}>
                                    <h2> Projection </h2>
                                    </Link>
                              </div>

                              <div className='dashboard'>
                                    <FolderSharedIcon className='icon' />
                                    <Link to="/data" style={{ textDecoration: 'none' }}>
                                    <h2> Data </h2>
                                    </Link>
                              </div>

                              <div className='dashboard'>
                                    <SettingsIcon className='icon' />
                                    <h2> Settings </h2>
                              </div>

                              <div className='dashboard'>
                                    <ExitToAppIcon className='icon' />
                                    <h2> Logout </h2>
                              </div>

                        </div>
                  </div>
            </aside>
      )
}

export default Sidebar;