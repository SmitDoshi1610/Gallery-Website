import React from 'react'
import './../App.css'

const Contact = () => {
  return (
    <div className='contianer'>
      <div className='d-flex justify-content-center align-items-center'>
        <form className='flex-column col-6'>
          <div className='mb-3 mt-5 form-group'>
          <label for="Name" className='form-label'>Name</label><br/>
          <input type="text" className='form-control form-control' id="Name" placeholder='Enter your Name'/>
          </div>

          <div className='mb-3 form-group'>
          <label for="Email" className='form-label'>Email</label><br/>
          <input type="email" className='form-control' id="Email"  placeholder='Enter your Email'/>
          </div>

          <div className='mb-3 form-group'>
          <label for="Phone" className='form-label'>Phone No</label><br/>
          <input type="text" className='form-control' id="Phone"  placeholder='Enter your Phone No'/>
          </div>

          <div className='mb-3 form-group'>
          <label for="Message" className='form-label'>Message</label><br/>
          <textarea className='form-control' id='Message' cols="10" rows='2'  placeholder='Enter your Message'></textarea>
          </div>

          <div className='form-group'>
            <button type='submit' className='form-control w-50 offset-3 btn btn-primary'>Sumbit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact