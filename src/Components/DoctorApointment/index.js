import { Box, Typography } from '@mui/material'
import React from 'react'
import doctorimg from '../../Public/Images/FirstPageImages/doctor.png'
import './index.css'
import Grid from '@mui/material/Grid2';
export const DoctorAppointment= () => {
  return (
   <Box sx={{
     flexGrow: 1, 
    backgroundColor:'#F7F7F7',
    position:'relative',
    bottom:'217px'
   }}>
   
    <Grid container spacing={2} sx={{
        // display: 'inline-flex',
    }}>
       
        <Grid size={5} sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row',flexWrap:'nowrap'}}>
          <Box  sx={{
         // objectFit:'cover',
             
               p:'100px'
         // overflow:'hidden/'
          }}>

            <img  style={{borderRadius:'200px'}}
             src={doctorimg}
            alt='doctorimg'
            width='250px'
            height='250px'>
       </img>
          </Box> 
        </Grid>
   
    {/*headerdoctorinfoBox*/}
        <Grid size={7}>
          <Box sx={{
          pt:'48px',
          
         }}>
      <Typography variant='h3' fontWeight={400}>Meet Our Doctor</Typography>
      <Typography pt={'16px'} variant='body1'  fontWeight={300}>About Dr. Basit</Typography>
      <Typography pt={'5px'}  display={'inline-flex'} variant='body1'  fontWeight={300}>Best 
           <Typography pl={'2px'} variant='body1' fontWeight={600} color='#1A78F2'>Consultant
           </Typography></Typography>
      <Typography pt={'5px'}  variant='body1' fontWeight={300}>A consultant doctor is a highly qualified medical professional who specializes in a specific area of medicine, providing expert advice and care to patients withcomplex health conditions. With extensive training and experience, they
      diagnose and manage challenging cases, developing personalized treatment
      plans to ensure the best possible outcomes. As a trusted specialist,
      a consultant doctor offers in-depth knowledge and skills, guiding patients
      through their healthcare journey with precision and compassion. Their role
      also includes mentoring other healthcare professionals and staying abreast
      of the latest medical advancements to provide cutting-edge care.</Typography>
      <Box sx={{
        textAlign:'right'
      }}>
      <Typography  pt={'10px'} variant='subtitle1' fontWeight={500} >MBBS, MD (General Physician)</Typography></Box>
     
          </Box>
        </Grid>

    {/*footerspouncersBox*/}
        <Grid>
          <Box>

          </Box>
        </Grid>
    </Grid>
   </Box>
  )
}
