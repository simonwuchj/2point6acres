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
import { CardActionArea, Chip, Divider, Grid } from "@mui/material";
import {
  Link
} from "react-router-dom";
import { Stack } from "@mui/system";

export default function TopicPostCard(props) {

  return (
    <Card>
      <CardActionArea component={Link} to={props.to}>
        <Box 
          sx={{ 
            display: 'flex',
            backgroundColor: (theme) => theme.palette.secondary.contrastText,
          }
        }>
          <CardHeader
              avatar={
                <Avatar>
                  R
                </Avatar>
              }
              title="Simon Wu"
              subheader="发表于5分钟前"
            />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              test test
            </Typography>
          </CardContent>
        </Box>
      <Divider />
      <Box sx={{ m: 1 }}>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <Typography variant="body1" color="text.primary">
              Tag:
            </Typography>
          </Grid>
          <Grid item xs>
            <Stack direction="row" spacing={1} >
              <Chip color="primary" label="Google" avatar={<Avatar>G</Avatar>} variant="outlined" /> 
              <Chip color="success" label="Result: Pass" variant="outlined" /> 
              <Chip color="secondary" label="YOE: 5" variant="outlined" /> 
              {/* <Chip color="error" label="Result: Failed" variant="outlined" />  */}
              {/* <Chip color="warning" label="Result: On Hold" variant="outlined" />  */}
            </Stack>
          </Grid>
        </Grid>
      </Box>
      </CardActionArea>
    </Card>
  );

}