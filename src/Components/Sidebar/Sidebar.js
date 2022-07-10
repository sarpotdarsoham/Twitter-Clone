import React from 'react';
import './Sidebar.css'

// Components
import SidebarOption from '../SidebarOption/SidebarOption'

// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';


const Sidebar = () => {
  return(
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon className="sidebar-twitterIcon"/>

      <SidebarOption active Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
      <SidebarOption Icon={MessageIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
      <SidebarOption Icon={ListAltIcon} text="Lists"/>
      <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>

      {/* Tweet Button */}
      <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;