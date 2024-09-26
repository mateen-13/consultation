import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, Typography } from '@mui/material';

export const FirstPageCards = ({size,service,image}) => {
    

  return (
    <>
    <Button 
    sx={{
     position:'relative',width:'max-content',
     backgroundColor: '#FfFfFf',
     alignItems:'center',
     color:'#202020', 
     ml:'15px',
     zIndex:'1600',
     top:'10px' 
       
    }}
    variant='text'
    size='small'
    color="inherit"
    
    > <Typography  variant='subtitle2' fontStyle={'inherit'} fontSize={'8px'} fontWeight={'400'}> 
       { service.name }
    </Typography>     
    </Button>
    <Card sx={{  
        position:'relative',
        width: size,
        // width: '216px',
        height: '300px',
        
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
           
    }}>
       
              <CardMedia
              component="img"
              sx={{ }}
              image={image}
              title="service img"
            />
     
    </Card>

</>

  )
}
