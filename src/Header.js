import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import './Header.css';
import { Link } from "react-router-dom";



const Header = () => {
   
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src='./Image/logo1.png' alt='logo'></img>
                </div>
                <Link className='icons' to="/" style={{ textDecoration: 'none' }}>
                
                    <KeyboardTabIcon className='icon' />
                    <h2> Zipline Test </h2>
                
                </Link>

                <div className='radio'>
                    <Box className="label" >
                        <FormControl fullWidth className='select'>
                            <InputLabel >Select Company</InputLabel>
                            <Select>
                                <MenuItem value={10}>Zypline Test</MenuItem>
                                <MenuItem value={20}>Zipline Automation</MenuItem>
                                <MenuItem value={30}>Zinline AI</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
              </div>
          </nav>
        </>
    )
}

export default Header;