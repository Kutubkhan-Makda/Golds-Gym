import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  return (
    <Box id='exercises' sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
      <Typography variant='h3' md='46px'>
        Showing Results
      </Typography>
      <Stack direction='row'>

      </Stack>
    </Box>
  )
}

export default Exercises