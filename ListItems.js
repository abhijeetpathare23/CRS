import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import Profile from './Profile';

import Study from './Study';
 
//import DropdownButton from 'react-bootstrap/DropdownButton';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon sx={{color:'white'}}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={Profile} >
      <ListItemIcon>
        <PersonIcon sx={{color:'white'}}/>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InfoIcon sx={{color:'white'}}/>
      </ListItemIcon>
      <ListItemText primary="Placement Info" />
    </ListItemButton>
    <ListItemButton onClick={Study}>
      <ListItemIcon>
        <AutoStoriesIcon sx={{color:'white'}}/>
      </ListItemIcon>
      <ListItemText primary="Study Material" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GroupsIcon sx={{color:'white'}}/>
      </ListItemIcon>
      <ListItemText primary="Our Recruiters" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon sx={{color:'white'}}/>
      </ListItemIcon>
      <ListItemText primary="LogOut" />
    </ListItemButton>
  </React.Fragment>
);