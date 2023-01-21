import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,setBodyPart,BodyPart}) => {
  return (
    <Stack 
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{borderTop:BodyPart===item?'4px solid #ff2625':'',backgroundColor:'#fff',borderBottomLeftRadius:'20px',width:'270px',height:'280px',cursor:'pointer',gap:'47px'}}
    onClick={()=>{
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });}}>
        <img src={Icon} alt="dumble" style={{width:'40px',height:'40px'}}/>
        <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='uppercase'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart