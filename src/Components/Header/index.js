import { Box, Typography, } from '@mui/material'
import React from 'react'
// import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Grid from '@mui/material/Grid2';
import './index.css'


import { BookButton } from '../BookButtoon';
export const Header = () => {
  return (
    <Box sx={{ 
        flexGrow: 1,
        pt:'25px',
        pb:'16px',
        borderBottom: '1px solid #66ffff',
        bgcolor:'#FFFFFF'}}>
       <Grid container spacing={2}>
      <Grid size={3}>
         {/*consult box*/}
         <Box sx={{
            pl:'11px'
         }}>
            <Typography variant='subtitle2' fontWeight={'400'} sx={{ pl:'16px',width:'26%',border:'1px solid black'}} >Consult</Typography>
         </Box>
      </Grid>
    <Grid size={6}>
          {/*navBar */}
          <Box sx={{ display: 'flex',justifyContent: 'center', alignItems:'center', flexDirection:'row'}} >
          <Grid sx={{ display: 'flex',justifyContent: 'flex-start', alignItems:'center' ,gap:'40px',}}>
             <Box>
                <Typography variant='subtitle2' fontWeight={'400'} color='#202020'>
                   Home
                </Typography>
             </Box>
             <Box>
                <Typography variant='subtitle2' fontWeight={'400'}>
                   About me
                </Typography>
             </Box>
             <Box>
                <Typography variant='subtitle2' fontWeight={'400'}>
                   Contact me
                </Typography>
             </Box>
          </Grid>
          </Box>
         
      </Grid>
      <Grid size={3} >
         {/*navBar and Login */}
         <Box sx={{ display: 'flex',justifyContent: 'center', alignItems:'center', flexDirection:'row'}}>
           <Grid sx={{ display: 'flex',justifyContent: 'flex-start', alignItems:'center',gap:'30px' }}>
             <Box>
                <Typography variant='subtitle2' fontWeight={'400'}>
                   Login
                </Typography>
             </Box>
             <BookButton/>
           </Grid>
         </Box>
      </Grid>
      </Grid>
    </Box>
  )
}
