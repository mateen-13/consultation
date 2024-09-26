import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const BookButton = () => {
  return (
    <Box>
    <Button 
    sx={{
     display:'flex',width:'max-content',
     backgroundColor: '#1A78F2',
     color:'white',    
    }}
    variant='text'
    size='small'
    endIcon={<ArrowForwardIcon
     sx={{
       backgroundColor: '#1A78F2',
       color:'white',      
      }}
     />}
    color="inherit"
    
    > <Typography variant='subtitle2' fontStyle={'inherit'} fontSize={'8px'} fontWeight={'400'}> 
        Book a video appointment  
    </Typography>     
    </Button>               
  </Box>
  )
}
