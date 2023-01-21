import { Stack } from '@mui/system'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,setBodyPart,BodyPart}) => {
  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card'>
        <img src={Icon} alt="dumble" style={{width:'40px',height:'40px'}}/>
    </Stack>
  )
}

export default BodyPart