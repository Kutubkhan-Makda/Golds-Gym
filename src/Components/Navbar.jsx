import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'112px',xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px='20px'>
      <Link to='/Golds-Gym'>
        <img src={logo} alt="logo" style={{width:'48px',height:'48px',margin:'0 20px'}} />
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link to='/Golds-Gym' style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none',color:'#3A1212'}}>Exersise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar