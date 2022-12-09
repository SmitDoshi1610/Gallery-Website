import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import About from './Components/About';
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
     <Route element={<Home/>} path="/"/>
     <Route element={<Gallery/>} path="/gallery"/>
     <Route element={<About/>} path="/about"/>
     <Route element={<Contact/>} path="/contact"/>
     
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App