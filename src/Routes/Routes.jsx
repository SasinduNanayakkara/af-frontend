import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Landing from '../Pages/landing'
import Articles from '../Pages/Articles'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'

function PageRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/articles' element={<Articles/>} />
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>
        </Routes>
    </Router>
  )
}

export default PageRoutes