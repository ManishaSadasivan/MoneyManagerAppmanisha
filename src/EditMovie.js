import React ,{ useState,useEffect }  from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory ,useParams} from "react-router-dom";
import'./AddMovies.css';

export default function AddMovies({movielist,setMovielist}) {
    const {id}=useParams();
    console.log(id);

    const [editedmovie,setEditedmovie]=useState(null)
    function getMovies(){
      fetch("https://61f66c842e1d7e0017fd6d9f.mockapi.io/movielist/"+id,{method: "GET"})
      .then((data)=>data.json()
      .then((response)=>setEditedmovie(response)))
     }
     useEffect(getMovies,[])
console.log(editedmovie);
    // const updateMovie=movielist[id];
   

  return <div >
      
     {editedmovie ?<EditmovieForm editedmovie={editedmovie}/> :""}
  </div>;
}

function EditmovieForm({editedmovie}){
  const [name,setName]=useState(editedmovie.name);
  console.log(editedmovie.name)
  const [rating,setRating]=useState(editedmovie.rating);
  const [poster,setPoster]=useState(editedmovie.poster);
  const [summary,setSummary]=useState(editedmovie.summary);
  const history=useHistory();
  return (
    <div className="AddMovies">
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
        fetch("https://61f66c842e1d7e0017fd6d9f.mockapi.io/movielist/"+editedmovie.id,{
          method: "PUT",
          body:JSON.stringify(updatedMovie),
          headers:{
            "Content-Type": "application/json"
          },
  
         }).then(()=>history.push("/Movies"));
        // const copyofmovies=[...movielist];
        // copyofmovies[id]=updatedMovie;
        // setMovielist(copyofmovies);
        
        // console.log(updatedMovie);
        // console.log(copyofmovies);
    }}
>Save</Button>
    </div>
  )
}