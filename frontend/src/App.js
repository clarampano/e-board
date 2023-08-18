import React from 'react'
import Login from './Login'
import Signup from './Signup'
import './sass/css/App.css'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom' 
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import Addannouncent from './pages/Addannouncement.jsx'
import Users from './pages/Users.jsx'
import Uokmis from './pages/Uokmis.jsx'
import UpdateUser from './pages/UpdateUser.jsx'
import Sidebar from './component/Sidebar'
import'./sass/css/Users.css'
import'./sass/css/Addannouncement.css'
import CreateUser from './pages/CreateUser.jsx'
import LoginPage from './pages/LoginPage.jsx'



function App() {
  
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
  
<Route path='/' element={<LoginPage />}></Route>
<Route path='/dashbord' element={<Dashboard />}></Route>
<Route path='/Signup' element={<Signup />}></Route>
<Route path='/about' element={<About />}></Route>
<Route path='/users' element={<Users />}></Route>
<Route path='/addannouncent' element={<Addannouncent />}></Route>
<Route path='/Uokmis' element={<Uokmis />}></Route>
<Route path='/createnewuser' element={<CreateUser />}></Route>
<Route path='users/updateuser/:id' element={<UpdateUser />}></Route>


    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default App;
