import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path='/Golds-Gym' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
