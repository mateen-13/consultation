import { Box} from '@mui/material'
import Grid from '@mui/material/Grid2';
import React from 'react'
import { BookButton } from '../BookButtoon'
import { FirstPageHeader } from '../FirstPageComponents/Header/index';
import { Cards } from './Cards';

export const FirstPage = (props) => {

         
  return (
    
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding:'0px',
        margin:'0px',
        width:'100%'
    }}>
        <Grid>
          {/*Header */}
          <FirstPageHeader/>
        </Grid>
        {/*BookButton */}
       <Grid sx={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignContent:'center',
        flexWrap:'wrap',
        pt:'11px',
        pb:'11px'
               }}>
          <BookButton/>
        </Grid>
          {/*Cards*/}
        <Grid sx={{
            display:'flex',
            justifyContent:'center',
            flexDirection:'row',
            alignContent:'center',
            flexWrap:'wrap',
            pt:'11px',
            pb:'11px'
         }}>
          <Cards/>

      </Grid>
  </Box>
  )
}

