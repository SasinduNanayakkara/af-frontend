import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Landing from '../Pages/landing'
import SignUp from '../Pages/SignUp'
function PageRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </Router>
  )
}

export default PageRoutes