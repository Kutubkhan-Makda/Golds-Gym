import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} md='50px' textAlign='center'>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position='relative' md='72px'>
        <TextField height='76px' value='' onChange={(e)=>{}} placeholder='Search Exercises' type='text' sx={{input:{fontWeight:'700',border:'none',borderRadius:'4px'},width:{lg:'1170px',xs:'350px'},backgroundColor:'#fff',borderRadius:'40px'}}/>
        <Button className='search-btn' sx={{bgcolor:'#FF2625',color:'#fff',textTransform:'none',width:{lg:'175px',xs:'80px'}}}>Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises