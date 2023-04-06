import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Attendence from './pages/Attendence'
import Holidays from './pages/Holidays'
import Finance from './pages/Finance'
import Employee from './pages/Employee'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Sidebar>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/Attendence' element={<Attendence/>}/>
        <Route path='/Holidays' element={<Holidays/>}/>
        <Route path='/Finance' element={<Finance/>}/>
        <Route path='/Employee' element={<Employee/>}/>
        
      </Routes>
      </Sidebar>
      </BrowserRouter>
    </div>
  )
}

export default App