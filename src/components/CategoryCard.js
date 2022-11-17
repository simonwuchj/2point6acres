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
import { CardActionArea } from "@mui/material";
import {
  Link
} from "react-router-dom";

export default function CategoryCard(props) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/forum/${props.category.toLowerCase()}`}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/Tech.jpg"
          alt="green iguana"
          sx={{ padding: ".5em .5em 0 .5em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ textAlign: "center" }}
          >
            {props.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};