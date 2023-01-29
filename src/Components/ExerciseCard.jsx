import { Button, Pagination, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { lazy } from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading={lazy}/>
      <Stack direction='row'>
        <Button sx={{ml:'21px',color:'#fff',background:'#ffa9a9',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ml:'21px',color:'#fff',background:'#fcc757',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
          {exercise.target}
        </Button>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pd='10px' textTransform='capitalize' fontSize='22px'>
          {exercise.name}
        </Typography>
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercise.length>9 && (
          <Pagination/>
        )}
      </Stack>
    </Link>
  )
}

export default ExerciseCard