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

function App() {
  

  return (
    <>
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
              <Route path='*' element={<PageNotFound/>}/>

            </Route>
      </Routes>
     
    </>
  )
}

export default App
