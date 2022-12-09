import React, { useState } from 'react'
import './../App.css'

const Home = () => {
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const findTime = () => {

    let date = new Date();
    console.log(date);
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    setHours(h);
    setMinute(m);
    setSecond(s);
   
  }
  setInterval(findTime, 1000);

  return (
    <div className="fluid-container bg-dark text-white" style={{height:'85vh'}}>
      <div className='d-flex flex-column mh-100 justify-content-center align-items-center'>
        <h1>Welcome to the Website</h1>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
          <div className='d-flex display'>
            <h2 className='flex-inline'>{hours}<span>:</span></h2>
            <h2 className='flex-inline'>{minute}<span>:</span></h2>
            <h2 className='flex-inline'>{second}</h2>
            
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Home