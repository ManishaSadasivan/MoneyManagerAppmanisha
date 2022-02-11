import React ,{useState}from 'react';
import './Movie.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory  } from "react-router-dom";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Checkbox from '@mui/material/Checkbox';
import InfoIcon from '@mui/icons-material/Info';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Movies({movielist,setMovielist}) {
 
 
  console.log(movielist);
  const[Like,setLike]=useState(0);
  const[disLike,setdisLike]=useState(0);
  const[toggle,settoggle]=useState("true");
  const history=useHistory();
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
 
  const classes = useStyles();
  function getMovies(){
    fetch("https://61f66c842e1d7e0017fd6d9f.mockapi.io/movielist",{method: "GET"})
    .then((data)=>data.json()
    .then((response)=>setMovielist(response)))
   }
  function handledelete(id){
   
    fetch("https://61f66c842e1d7e0017fd6d9f.mockapi.io/movielist/"+id,{method: "DELETE"})
    .then((data)=>data.json()
    .then(()=>getMovies()))

};

  return <div className="Movies" >
{movielist.map(({id,name,rating,summary,poster})=>(


    <Card className={classes.root} style={{margin:"5px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="moviePoster"
          height="400"
          image={poster}
         
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="h2">
            <div className="movieSpecs">
              <h4> {name}</h4>
              <Button size="large" color="primary" onClick={()=>{settoggle(!toggle)}}>
              {toggle? <ExpandLessIcon></ExpandLessIcon>:<ExpandMoreIcon></ExpandMoreIcon>}
        </Button>
              <Button size="large" color="primary" onClick={()=>history.push("/MovieDetails/"+id)}>
              <InfoIcon fontSize="small" ></InfoIcon>
        </Button>
              <h6 style={{color:rating<4?"red":"green"}}>⭐{rating}</h6>
           
            </div>
         
           
          </Typography>
         
    
          {toggle ?<Typography variant="body2" color="textSecondary" component="p" >
            
            {summary}
           
           </Typography> :" "}
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Button size="small" color="primary">
        <ThumbUpAltIcon fontSize="small" onClick={()=>{setLike(Like+1)}}></ThumbUpAltIcon>{Like}
        </Button>
        <Button size="small" color="primary">
        <ThumbDownIcon fontSize="small" onClick={()=>{setdisLike(disLike+1)}}></ThumbDownIcon>{disLike}
        </Button>
      
        <Button size="small" >
        <EditIcon fontSize="small" onClick={()=>{history.push("/EditMovie/"+id)}}></EditIcon>
        </Button>
        <Button size="small" color="secondary">
         <DeleteIcon size="small" 
         onClick={()=>handledelete(id)}></DeleteIcon>
        </Button>
      </CardActions>
    </Card>
))}
  </div>;
}
