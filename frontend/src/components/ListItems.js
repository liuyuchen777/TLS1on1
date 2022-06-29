import * as React from 'react';
import { Link } from "react-router-dom";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PeopleIcon from '@mui/icons-material/People';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatIcon from '@mui/icons-material/Chat';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/Profile">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary="Chart" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FavoriteOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Favoriate" />
    </ListItemButton>
  </React.Fragment>
);