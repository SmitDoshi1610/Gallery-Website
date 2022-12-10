import Home from './Components/Home';
import Gallery from './Components/Gallery';
import About from './Components/About';
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Navbar/>
     <Route element={<Home/>} exact path="/"/>
     <Route element={<Gallery/>} path="/gallery"/>
     <Route element={<About/>} path="/about"/>
     <Route element={<Contact/>} path="/contact"/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App