import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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
            <Route path='/consultant/home' element={<Home/>} />
            <Route path='/consultant/articles' element={<ConsultantArticles/>} />
            <Route path='/consultant/profile' element={<ConsultantProfile/>} />
            <Route path='/consultant/chat' element={<ConsultantChat/>} />



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