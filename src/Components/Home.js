import React from 'react'
import './../App.css'
import Navbar from './Navbar'
import logo from '../3.jpg'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
 
  return (
    <>
    <div className='fluid-container' style={{height:'80vh', position:'relative'}}>
    <img src={logo} className='main img-fluid'/>
    <div className="text-white">
      <div className='d-flex justify-content-center align-items-center'>
      <main className="home-container">
      <p>Hello 👋 I'm</p>
      <section className="animation">
        <div className="first"><div>Problem Solver</div></div>
        <div className="second"><div>Web Developer</div></div>
        <div className="third"><div>Systems Engineer</div></div>
      </section>
      </main>
      
       <Link to='/contact'><button className='btn btn-primary'>Contact Us</button></Link>
        </div>
     
    </div>
    </div>
    </>
  )
}

export default Home