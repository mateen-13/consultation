import { Badge, Box,Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid2';
import image from '../../../Public/Images/FirstPageImages/image0.png'
export const FirstPageHeader = () => {
  return (
    <Grid>
    {/*Header */}
    <Grid item xs={8} sx={{
      flexGrow: 1,
        display:'flex',
        justifyContent:'flex-end',
        flexDirection:'row-reverse',
        alignItems:'flex-start',
        pt:'25px'
    }}>
       <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignItems: 'center',
       }}>
          <Typography variant='h1' fontSize={'4rem'} fontWeight={'600'} sx={{}}>
          The Place Where 
          <Badge badgeContent={<AddIcon  fontSize='large' sx={{fontSize:'50px',color:'#34C759' }}/>}  pt={'90px'} >
            <Typography variant='h1' fontWeight={'600'}  color='blue' pl={'11px'}>
               Doctors
            </Typography>
          </Badge>
          </Typography>
          <Typography variant='h1' fontSize={'4rem'} fontWeight={'600'} >Listen to You!</Typography>
         
          <Typography variant='h5'fontWeight={'400'}  sx={{
              alignContent:'center',
              pt:'25px' 
          }}>
          Online Privacy Chat that is offered with or without insurance.
          </Typography>
       </Box>
    <Grid item xs={4}>
     <Box  sx={{
      rotate:'340deg',
      borderRadius:'0px',
      pt:'20px'
  }}>
      <img 
      src={image}
      alt={image.title}
      height={'225px'}
      width={'255px'}
      loading="fast"/>
     </Box>
    </Grid>
    </Grid>
  </Grid>
  )
}
