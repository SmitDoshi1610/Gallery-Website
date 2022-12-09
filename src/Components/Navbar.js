import './navbar.css'
import { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    const [hours, setHours] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

  const findTime = () => {

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    h = (h < 9) ? "0"+h : h;
    setHours(h);
    m = (m < 9) ? "0"+m : m;
    setMinute(m);
    s = (s < 9) ? "0"+s : s;
    setSecond(s);
   
  }
  setInterval(findTime, 1000);

    return (
        <>
            <div className='fluid-container' style={{height:'10vh', position:'relative'}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><i class="fa fa-camera-retro fa-2x fa-spin" aria-hidden="true"></i></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                                <li className="nav-item">
                                  
                                    <Link to="/" className="nav-link" style={{fontWeight:'600'}}>Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/gallery" className="nav-link" style={{fontWeight:'600'}}>Gallery</Link>
                                </li>

                                <li className="nav-item">
                                <Link to="/about" className="nav-link" style={{fontWeight:'600'}}>About Us</Link>
                                </li>

                                <li className="nav-item">
                                <Link to="/contact" className="nav-link" style={{fontWeight:'600'}}>Contact Us</Link>
                                </li>

                                <li className='nav-item d-flex align-items-center justify-content-center'>
                                    <span className='pl-5'>{hours} : </span>
                                    <span className='pl-2'>{minute} : </span>
                                    <span className='pl-2'>{second}</span>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar