import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {useParams} from "react-router-dom";
import {useContext,useState,useEffect} from "react"
import {NoteContext} from "../contexts/video-note"
import axios from "axios";

export default function VideoCard()
{
    const {note,dispatch,notes} = useContext(NoteContext);
    const [video,setVideo] = useState()

    const {id} = useParams();
    
    // getting notes for that particular video
    const savednotes = notes.filter(item=>item.noteid===id);

    useEffect( ()=>
    {
       (async ()=>
        {
            const {data} = await axios.get("https://videolibrarybackend.herokuapp.com/api/videos/"+id);

            setVideo(data);

        })()
       

    },[id])
  
    return(
        <div className="particularVideo">
      
        <div key={id} className="card particularVideo__card">
        <div className="responsive particularVideo__card--responsive">
        <iframe src={`https://www.youtube.com/embed/${video?.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
        <div className="card__description">
            <h3 >
                {video?.description}
            </h3>
            <div className="icons">
                <div className="icon" >
                    <BookmarkBorderIcon style={{fontSize:"2rem"}}/>
                </div>
               <div className="icon" >
                    <PlaylistAddIcon style={{fontSize:"2rem"}}/>
               </div>
               

            </div>

        </div>

                 
    </div>
    <div className="particularVideo__note">
        <div  >
            {savednotes.map(({savednote})=>savednote)}
        </div>
        <div className="particularVideo__description" >
        <input onChange={(e)=>dispatch({type:"createnote",payload:e.target.value}) } className="particularVideo__note--input" type="text" placeholder="Your Notes" value={note} />
        <button onClick={()=>dispatch({type:"savenote",payload:{note,id}})} className="save__button">Save</button>
        </div>
        
    </div>
    </div>
    )
}