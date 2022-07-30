import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutline from '@mui/icons-material/HelpOutline';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';


function Header() {
  return (
    <div className='header'>
    {/* Left header section */}
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt="gmail logo"/>
      </div>

    {/* Middle header section */}
      <div className="header__middle">
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input type="text" placeholder="In E-Mails suchen"/>
        <IconButton>
        <TuneIcon
        className="header__inputCaret" />
        </IconButton>
      </div>

    {/* Right header section */}
      <div className="header__right">
        <IconButton>
        <HelpOutline />
        </IconButton>
        <IconButton>
        <SettingsOutlined />
        </IconButton>
      <IconButton>
        <AppsIcon />
        </IconButton>
      <IconButton>
        <Avatar className='accountBtn'/>
        </IconButton>
      </div>
    </div>
  )

}

export default Header