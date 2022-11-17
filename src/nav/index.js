import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';

import SearchAppBar from '../components/SearchAppBar'
import SideDrawer from '../components/SideDrawer';
import { Outlet } from 'react-router-dom';

export default function NavBar(props) {
  const drawerWidth = 150;
  const SearchAppBarTitle = "鱼余渔"

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <Box height="100vh" display="flex">
      <CssBaseline />
      <SearchAppBar
        iconOnClick={toggleDrawer}
        isDrawerOpen={open}
        drawerWidth={drawerWidth}
        title={SearchAppBarTitle}
      />
      <SideDrawer
        isDrawerOpen={open}
        iconOnClick={toggleDrawer}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        sx={{
            backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
      }}>
        <Outlet />
      </Box>
    </Box>
  );
}