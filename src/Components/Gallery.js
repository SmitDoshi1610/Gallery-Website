import React, { useEffect, useState } from 'react'
import './../App.css'

const Gallery = () => {

  const [data, setData] = useState([]);
  const [message, setMessage] = useState('Search To Find Images')

  const fetchData = async (e) => {
    
    if(e.target.value === '' || e.target.value === null)
    {
       return setData([])
    }
    const res = await fetch(`https://pixabay.com/api/?key=31901836-4376ef8a8402fc79dd8012c5f&q=${e.target.value}&image_type=photo&pretty=true`);
    const d = await res.json();
    if(d.length === 0)
    {
      setMessage('No images Found');
    }
    setMessage('');
    return setData(d.hits);

  }

  useEffect(() => {
    fetchData();
    setMessage('No images Found');
  },[]);

  return (
    <div className='container'>

      <div className='d-flex justify-content-center align-items-center mt-2'>
        
          <div className='input-group search-container col-12 flex-nowrap'>
            <span className='input-group-text' id='addon-wrapping'>Search</span>
            <input type='text' id='query' className='form-control' name='search' aria-label='Enter to Serach...' aria-describedby='addon-wrapping' onChange={fetchData}></input>
          </div>
      </div>

      <div className='container d-flex row mt-4'>
        {
          data.map((d) => {
            return(
              <>
              <div className="col-3">
              <div id={d.id} className="p-3">
                <img src={d.webformatURL} alt={d.type} className='img img-fluid img-thumbnail mx-auto d-block' width='100%' height='100%'/>
              </div>
              </div>
              </>
            )
          })
        }
        <h1>{message}</h1>
      </div>
    </div>
  )
}

export default Gallery