import React,{useEffect,useState} from 'react'
import axios from '../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import "./RawPost.css"
import YouTube from 'react-youtube';


function RawPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(() => {
      axios.get(props.url).then(response=>{
          setMovies(response.data.results)


      })
   
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-U`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Array Empty')
        } 
    })
  }
  
  return (
  <div className='row'>
  <h2>{props.title}</h2>
  <div className='posters'>
    {movies.map((obj) => 
      <div className='poster'>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='posters' src={`${imageUrl + obj.backdrop_path}`} />


      </div>
    )}
  </div>
  { urlId && <YouTube videoId={urlId.key} opts={opts}/> }

  </div>

  )
}

export default RawPost
