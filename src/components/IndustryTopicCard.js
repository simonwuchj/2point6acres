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
import {
  Link
} from "react-router-dom";
import { CardActionArea } from "@mui/material";


export default function IndustryTopicCard(props) {

  return (
    <Card>
      <CardActionArea component={Link} to={props.to}>
        <CardHeader
            title={props.title}
          />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};