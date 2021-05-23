import {useContext,useState,useEffect} from "react"
import {PlayListContext} from "../contexts/playlist-context"
import {Link,useParams} from "react-router-dom"
import axios from "axios"
export default function CreatePlayListFromVideos()
{

   const {playListName,setPlayListName} = useContext(PlayListContext)
    const {dispatch,itemsInPlayList} = useContext(PlayListContext);
    const {videoId} = useParams();
    const [video,setVideo] = useState();
   
    useEffect( ()=>
    {
       (async ()=>
        {
            const {data} = await axios.get("http://localhost:5000/api/videos/"+videoId);

            setVideo(data);

        })()
       

    },[videoId])
   
    return(
        <div className="create">
  
            <input  onChange={(e)=>setPlayListName({...playListName,name:e.target.value})} className="playlist__name" value={playListName.name} type="text"/>
      
           
           <div className="playlist__button">

         
     
            <input type="button" value="Add " onClick={()=>{
            setPlayListName({...playListName,name:""})
            dispatch({type:"CreatePlayList",payload:playListName})}} className="playlist__create--secondary"/>
         
      
            <Link to="/">
            <input type="button" value="Done"
            className="playlist__create--secondary"/>
            </Link>
            
         
            </div>
            
        <div className="seePlayListsFromVideos">
            
            {itemsInPlayList.map(playlist=>
            {
               return <li key={playlist.name} className="seePlayListFromVideo">
                        
                        <input onClick={()=>{
                            dispatch({type:"AddToPlayList",payload:{...playlist,video:video}})
                        }} className="seePlayListFromVideo--checkbox" type="checkbox" id={playlist.name}  />
                        <label  className="seePlayListFromVideo--name"  htmlFor={playlist.name}>{` created ${playlist.name}`}</label>
                   
                </li>
            })}
            </div>
           
            
           
        </div>
    )
}