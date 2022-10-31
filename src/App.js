import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import SearchAppBar from './components/SearchAppBar'
import SideDrawer from './components/SideDrawer';

const mdTheme = createTheme();
const drawerWidth = 240;
const SearchAppBarTitle = "Side Project"


function App() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <SearchAppBar
        iconOnClick={toggleDrawer}
        isDrawerOpen={open}
        drawerWidth={drawerWidth}
        title={SearchAppBarTitle} >
      </SearchAppBar>
      <SideDrawer
        isDrawerOpen={open}
        iconOnClick={toggleDrawer}
        drawerWidth={drawerWidth}
      >
      </SideDrawer>

    </ThemeProvider>
  );
}

export default App;
