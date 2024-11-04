import React from "react";
import "./card-list.css";
import Card from "../card/card";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Grid2 } from "@mui/material";
import MonsterCard from "../card/card";


// class CardList extends React.Component {
//   render() {
//     return (
//       <div className="card-list">
//         
//       </div>
//     );
//   }
// }

const CardList=({monsters})=>{
    console.log(monsters,"monss")

    if(monsters?.length<=0){
        return (
            <p>No Data</p>
        )
    }
    return(
       



    <Container>
      <Grid2 container spacing={2}>
      {monsters.map((monster) => (
          <Grid2 size={{xs:12,md:4,lg:3,sm:6}} key={monster.id}> 
            <MonsterCard monster={monster} />
          </Grid2>
        ))}
       </Grid2>
       </Container>
    
    )
}

export default CardList;
