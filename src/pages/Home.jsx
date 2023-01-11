import { Box } from '@mui/system'
import React from 'react'
import Exercises from '../Components/Exercises'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home