import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import DisplayBox from './Components/Displaybox/DisplayBox'
import Offer from './Components/Offer/Offer'
import Work from './Components/Work/Work'
import Newletter from './Components/Newsletter/Newletter'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <DisplayBox/>
      <Offer/>
      <Work/>
      <Newletter/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
