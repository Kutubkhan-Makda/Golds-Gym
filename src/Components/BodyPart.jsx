import { Stack } from '@mui/system'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = () => {
  return (
    <Stack>
        <img src={Icon} alt="icon" className='body-part-icon'/>
    </Stack>
  )
}

export default BodyPart