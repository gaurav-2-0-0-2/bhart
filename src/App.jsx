import { useEffect } from 'react';
import './App.css'
import ExplorePage from './pages/ExplorePage.jsx'
import HomePage from './pages/HomePage.jsx'
import {Routes, Route, useNavigate} from 'react-router'
import ArtDetails from './components/ExplorePage/ArtDetails'

function SendHome() { 
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, [navigate]);
  return null
}

function App() {
  return (
    <div className="m-10">
      <Routes>
        <Route path='/' element={<SendHome/>}></Route> 
        <Route path='/home' element={<HomePage/>}></Route> 
        <Route path='/explore' element={<ExplorePage/>}></Route> 
        <Route path='/art/:id' element={<ArtDetails/>}></Route> 
      </Routes> 
    </div>
  )
}

export default App
