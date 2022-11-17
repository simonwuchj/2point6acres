import React from "react";
import { useParams } from "react-router-dom";
import IndustryTopicCard from "../components/IndustryTopicCard";

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
import TopicPostCard from "../components/TopicPostCard";

export default function TopicPostList(props) {
    const { industryId, topic } = useParams()

    const posts = ["GJKH", "PFDI"];

    return (
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
        <Toolbar />
        <Typography>
          <Box sx={{ fontWeight: 'bold', m: 1, fontSize: 'h6.fontSize'}}>
            {industryId}话题 &gt; {topic}
          </Box>
        </Typography>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            {
              posts.map((post) => {
                return (
                  <Grid item xs={8}>
                    <TopicPostCard to={`/forum/${industryId}/${topic}/${post}`}/>
                  </Grid>
                );
              })
            }
            </Grid>
        </Container>
      </Box>
      );
}