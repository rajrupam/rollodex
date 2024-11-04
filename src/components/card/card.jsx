import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MonsterCard = (props) => {
  return (
    <Card style={{border:'1px solid #dadada'}}>
      <CardMedia
      component="img"
        image={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        title="monster image"
        height='194'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{height:'60px'}}>
          {props.monster.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.monster.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MonsterCard