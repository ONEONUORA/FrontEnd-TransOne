import './App.css'
import Navbar from './component/Navbar-component'
import {Routes, Route} from "react-router-dom"
import HomePage from './page/home-page'
import AboutUs from './page/About-page'
import Terms from './page/Terms&Conditions-page'
import Contact from './page/Contact-page'
import HowToUse from './page/how-to-use-page'
import UserAuthForm from './page/UserAuthForm-page'
import PageNotFound from './page/PageNotFound-page'
import RatingUs from './page/rating-page'
import { createContext, useEffect, useState } from 'react'
import { lookInSession } from './common/session'
import Dashboard from './page/userDashboard-page'
import WeatherApp from './page/weatherApp-page'


export const UserContext = createContext({})


const App= () => {

  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
      let userInSession = lookInSession("user");

      userInSession ?  setUserAuth(JSON.parse(userInSession)) : setUserAuth({access_token : null})

  }, [])

  return (
      <UserContext.Provider value={{userAuth,setUserAuth}}>
         <Routes>
            <Route exact element={ <Navbar/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/About-page' element={<AboutUs/>}/>
              <Route path='/Terms&Conditions-page' element={<Terms/>}/>
              <Route path='/Contact-page' element={<Contact/>}/>
              <Route path='/how-to-use-page' element={<HowToUse/>}/>
              <Route path='/rating-page' element={<RatingUs/>}/>
              <Route path='/signin' element={<UserAuthForm type='sign-in'/>}/> 
              <Route path='/signup' element={<UserAuthForm type='sign-up'/>}/>
              <Route path='/userDashboard-page' element={<Dashboard/>}/>
              <Route path='/weatherApp-page' element={<WeatherApp/>}/>
              <Route path='*' element={<PageNotFound/>}/>

            </Route>
          </Routes>
      </UserContext.Provider>
  
         

  )
}

export default App
