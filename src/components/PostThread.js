import React, { useState } from "react";
// import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea, Chip, Divider, Grid, Paper } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import {
  Link, useParams
} from "react-router-dom";
import { Stack } from "@mui/system";

export default function PostThread(props) {
  const { industryId, topic, postId } = useParams();
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
        {industryId}话题 &gt; {topic} &gt; {postId}
      </Box>
    </Typography>
    <Paper elevation={3}>
        This is 
    </Paper>
    
    </Box>
  );
}