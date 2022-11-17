import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
import ColoredTabs from '../components/ColoredTabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewsHeadline from '../components/NewsHeadline';
import CategoryCard from '../components/CategoryCard';

export default function Forum(props) {
  return (
    <Box component="main">
      <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
                <Typography>
                <Box sx={{ fontWeight: 'bold', m: 1, fontSize: 'h6.fontSize'}}>论坛板块</Box>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <CategoryCard
                  category="Technology"
                />
            </Grid>
            <Grid item xs={6}>
                <CategoryCard
                  category="Finance"
                />
            </Grid>
            <Grid item xs={6}>
                <CategoryCard
                  category="Biotech"
                />
            </Grid>
          </Grid>
        </Container>
    </Box>
  )
};