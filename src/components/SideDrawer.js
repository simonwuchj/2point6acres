import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {
  Link
} from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import NewspaperIcon from '@mui/icons-material/Newspaper';


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'isDrawerOpen' && prop !== 'drawerWidth' })(
  ({ theme, isDrawerOpen, drawerWidth }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!isDrawerOpen && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export const DrawerListItems = (
  <React.Fragment>
    {/* <ListItemButton component={Link} to="/topNews">
      <ListItemIcon>
        <NewspaperIcon />
      </ListItemIcon>
      <ListItemText primary="新闻" />
    </ListItemButton> */}
    <ListItemButton component={Link} to="/forum">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="工作" />
    </ListItemButton>
    <ListItemButton component={Link} to="/forum">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="生活" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="收藏" />
    </ListItemButton>
  </React.Fragment>
);

export default function SideDrawer(props) {
    return (
      <Drawer
        variant="permanent"
        isDrawerOpen={props.isDrawerOpen}
        drawerWidth={props.drawerWidth}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
        <IconButton onClick={props.iconOnClick}>
          <ChevronLeftIcon />
        </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {DrawerListItems}
        </List>
      </Drawer>
    );
}