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

export default function NewsHeadline(props) {
  const [loading, setLoading] = useState(false);

  return (
    <Card>
      <CardHeader
          avatar={
            <Avatar>
              R
            </Avatar>
          }
          title="Place Holder"
          subheader="September 14, 2016"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Place Holder
        </Typography>
      </CardContent>
    </Card>
  );
};