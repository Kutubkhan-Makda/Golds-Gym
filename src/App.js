import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Box width='400px'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
    </Box>
  );
}

export default App;
