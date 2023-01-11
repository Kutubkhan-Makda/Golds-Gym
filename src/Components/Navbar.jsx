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
    </Stack>
  )
}

export default Navbar