import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Landing from '../Pages/landing'
function PageRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
        </Routes>
    </Router>
  )
}

export default PageRoutes