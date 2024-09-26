import { Box } from '@mui/material'
import React from 'react'
import { FirstPageCards } from '../Card'
import image1 from '../../../Public/Images/image1.png'
import image2 from '../../../Public/Images/FirstPageImages/image2.png'
import image3 from '../../../Public/Images/FirstPageImages/image3.png'
import image4 from '../../../Public/Images/FirstPageImages/image4.png'

export const Cards = () => {
  return (
    <Box  sx={{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row',
    
    }}  >
    
    <Box sx={
        {rotate:'358deg',
        
    }}>
     <FirstPageCards 
    size={100}
    service={{ 
      name: 'Primary Care', 
           }}
    image={image1}
    />  
    </Box>
   
    <Box sx={
        {rotate:'359deg'}
    }>
     <FirstPageCards
    size={'120px'}
    service={{ 
      name: 'Behevioral Health', 
            }}
    image={image2}
    />
    </Box>
   
   <Box sx={
    {rotate:'1deg'}
   }>
   <FirstPageCards 
    size={'150px'}
    service={{ 
      name: 'Manage your Condition', 
            }}
    image={image3}
    />
   </Box>
    
    <Box sx={
        {rotate:'2deg'}
    }>
    <FirstPageCards 
    size={'140px'}
    service={{ 
      name: 'Primary Health', 
            }}
    image={image4}
    />   
    </Box>
                  
        </Box>
  )
}
