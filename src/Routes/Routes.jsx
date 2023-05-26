import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Private Route Handler import
import { ConsultantPrivateRoute, AdminPrivateRoute, ClientPrivateRoute } from '../Auth/privateRoute'

// Common Components
import Landing from '../Pages/landing'
import Home from '../Pages/common/Home'
import SignUp from '../Pages/common/SignUp'
import SignIn from '../Pages/common/SignIn'

// Consultant specific components
import ConsultantArticles from '../Pages/consultant/Consultant-Article'
import ConsultantProfile from '../Pages/consultant/Consultant-Profile'
import ConsultantChat from '../Pages/consultant/Consultant-Chat'


import Articles from '../Pages/Articles'
import ViewConsultant from '../Pages/ViewConsultant'
import Announcements from '../Pages/Announcements'
import AdminAnnouncement from '../Pages/Admin-Announcements'
import ConArticle from '../Pages/Con-Article'
import ClientArticle from '../Pages/ClientArticle'
import NewArticle from '../Pages/NewArticle'

function PageRoutes() {
  return (
    <Router>
        <Routes>

            {/* Common routes */}
            <Route path="/" element={<Landing/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            

            {/* Consultant routes */}
            <Route path='/consultant/home' element={
            <ConsultantPrivateRoute>
              <Home/>
            </ConsultantPrivateRoute>} />

            <Route path='/consultant/articles' element={
            <ConsultantPrivateRoute>
              <ConsultantArticles/>
            </ConsultantPrivateRoute>} />

            <Route path='/consultant/profile' element={
            <ConsultantPrivateRoute>
              <ConsultantProfile/>
            </ConsultantPrivateRoute>} />

            <Route path='/consultant/chat' element={
            <ConsultantPrivateRoute>
              <ConsultantChat/>
            </ConsultantPrivateRoute>} />



            <Route path='/viewconsultant' element={<ViewConsultant/>}/>
            <Route path='/announcement' element={<Announcements/>} />
            <Route path='/announcement-admin' element={<AdminAnnouncement/>}/>
            <Route path='/myarticles' element={<ConArticle/>}/>
            <Route path='/article' element={<ClientArticle/>}/>
            <Route path='/newarticle' element={<NewArticle/>}/>
        </Routes>
    </Router>
  )
}

export default PageRoutes