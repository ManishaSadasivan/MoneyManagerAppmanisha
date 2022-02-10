import React,{useEffect,useState} from 'react';
import { useParams} from "react-router-dom";
import './MovieDetails.css';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory  } from "react-router-dom";
export default function MovieDetails({movielist,setMovielist}) {
    const {id}=useParams();
    const history=useHistory();
    const [movie,setMovie]=useState([]);
    console.log(id);
   function getMovieDetails(){
       fetch("https://61f66c842e1d7e0017fd6d9f.mockapi.io/movielist/"+id,{method:"GET"})
       .then((response)=>response.json())
       .then((data)=>setMovie(data));
   }

   useEffect(getMovieDetails,[]);
   console.log(movie);
  return <div>
<iframe src={movie.trailer} width="100%" height="600"></iframe>
<div className="moviedetails">
    <h1>{movie.name}</h1>
    <p style={{color:movie.rating<4?"red":"green"}}>⭐{movie.rating}</p>
   
</div>
<p>{movie.summary}</p>
<Button size="small" color="primary" onClick={() => history.goBack()}>
Go Back
</Button>

  </div>;
}

