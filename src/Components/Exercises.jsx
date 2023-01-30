import { Box, Pagination, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const paginate = (e,value)=>{
    setCurrentPage(value);
  }

  return (
    <Box id='exercises' sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
      <Typography variant='h3' md='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
        {exercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length>9 && (
          <Pagination color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length/exercisesPerPage)} page={currentPage} onChange={paginate} size='large'/>
        )}
      </Stack>
    </Box>
  )
}

export default Exercises