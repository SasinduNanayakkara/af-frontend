import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Landing from '../Pages/landing'
import Articles from '../Pages/Articles'
function PageRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/articles' element={<Articles/>} />
        </Routes>
    </Router>
  )
}

export default PageRoutes