import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "../HeaderOption/HeaderOption"
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./Header.scss";

function Header() {
    return (
        <div className="header">
           <div className= "header__left">
                <img src="/image1.png" alt=" " />
                <div className="header-search" >
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
           <div className= "header__right">
               <HeaderOption Icon={HomeIcon} title="Home" />
               <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
               <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
               <HeaderOption Icon={ChatIcon} title="Messaging " />
               <HeaderOption Icon={NotificationsIcon} title="Notifications" />
               <img src="/DSC_1247.jpg " alt=" " />
               
           </div>

        </div>
    )
}

export default Header
