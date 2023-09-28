import React, { useEffect, useState } from 'react'
import "./Banner.css"
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../axios'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results[0])
          setMovie(response.data.results[Math.floor(Math.random()*20)])
      })
 
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} 
     className='banner1'>
        <div className='content1'>
            <h1 className='title1'>{ movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{ movie ? movie.overview : ""}</h1>
        </div>
    <div className='fade'></div>    
    </div>
  )
}

export default Banner
