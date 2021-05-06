import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {BasicExercises} from "../myvideos/basicexercises"
import {useParams} from "react-router-dom";
import {useState,useContext} from "react"
import {NoteContext} from "../contexts/video-note"



export function getDescription(id)
{
 
    const item =BasicExercises.find(item=>item.id === id)
   return item.description
    
  

}
export default function VideoCard()
{
    // const [note,setNote] = useState("")
    const {note,dispatch,notes} = useContext(NoteContext);
    const {id} = useParams();
    const savednotes = notes.filter(item=>item.noteid===id);
    
 
    // console.log("aagaya",savednote);

    

   
    return(
        <div className="particularVideo">
      
        <div key={id} className="card particularVideo__card">
        <div className="responsive particularVideo__card--responsive">
        <iframe src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
        <div className="card__description">
            <h3 >
                {getDescription(id)}
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