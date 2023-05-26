import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Landing from '../Pages/landing'
import Articles from '../Pages/Articles'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import ViewConsultant from '../Pages/ViewConsultant'
import Announcements from '../Pages/Announcements'
import AdminAnnouncement from '../Pages/Admin-Announcements'
import ConArticle from '../Pages/Con-Article'
import ClientArticle from '../Pages/ClientArticle'

function PageRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path='/home' element={<Articles/>} />
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/viewconsultant' element={<ViewConsultant/>}/>
            <Route path='/announcement' element={<Announcements/>} />
            <Route path='/announcement-admin' element={<AdminAnnouncement/>}/>
            <Route path='/myarticles' element={<ConArticle/>}/>
            <Route path='/article' element={<ClientArticle/>}/>
        </Routes>
    </Router>
  )
}

export default PageRoutes