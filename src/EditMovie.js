import React ,{ useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory ,useParams} from "react-router-dom";
import'./AddMovies.css';

export default function AddMovies({movielist,setMovielist}) {
    const {id}=useParams();
    console.log(id);
    const updateMovie=movielist[id];
    const history=useHistory();
const [name,setName]=useState(updateMovie.name);
const [rating,setRating]=useState(updateMovie.rating);
const [poster,setPoster]=useState(updateMovie.poster);
const [summary,setSummary]=useState(updateMovie.summary);
  return <div className="AddMovies">
       <Container maxWidth="sm">
       <TextField id="standard-basic" label="name" value={name}onChange={(event)=>{setName(event.target.value)}}/><br></br>
  <TextField id="standard-basic" label="rating" value={rating}onChange={(event)=>{setRating(event.target.value)}} /><br></br>
  <TextField id="standard-basic" label="poster"  value={poster}onChange={(event)=>{setPoster(event.target.value)}}/><br></br>
  <TextField id="standard-basic" label="summary" value={summary}onChange={(event)=>{setSummary(event.target.value)}} /><br></br>
      </Container>
<Button color="primary" onClick={()=>{
          const updatedMovie={
            name:name,
            rating:rating,
           poster:poster,
           summary:summary
        }
        const copyofmovies=[...movielist];
        copyofmovies[id]=updatedMovie;
        setMovielist(copyofmovies);
        history.push("/Movies")
        console.log(updatedMovie);
        console.log(copyofmovies);
    }}
>Save</Button>
     
  </div>;
}
