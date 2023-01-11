import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack>
      <Link to='/Golds-Gym'>
        <img src={logo} alt="logo" style={{width:'48px',height:'48px',margin:'0 20px'}} />
      </Link>
      <Stack direction='row' gap='40px'>
        <Link to='/Golds-Gym' style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none',color:'#3A1212'}}>Exersise</a>
      </Stack>
    </Stack>
  )
}

export default Navbar