import React from 'react'
import { NavBar } from './components/NavBar'
import './App.css'
import Home from './components/Home';
import { Footer } from './components/Footer';



export const App = () => {
  return (
    <body style={{background:'rgb(236, 231, 231)'}}>
      
      
      <NavBar/>
    <div className='Home '><Home/></div>
    <div className='footer'><Footer/></div>

    </body>
  
 
  )
}
export default App;
