import React, { useEffect , useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import play_icon from '../../assets/play_icon.png'
import { useParams ,useNavigate} from 'react-router-dom'


const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzYxYzI2MmNhYmJmOTQxOGE5ZDViMjc2MmEwYjEzOCIsIm5iZiI6MTc0NzQ4NzYwOC40NjMsInN1YiI6IjY4Mjg4Yjc4OGE4ZTNkZTk3NTllMmM0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZwTgMjNA1QcERi7ZjNtJ8Rd3eTkDg7C96yF1G5IuwE'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, []);
  


  return (
    <div className='player'> 
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-2)}} />
      <iframe width='90%' 
      height="90%" 
      title='trailer' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      frameBorder="0" allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
