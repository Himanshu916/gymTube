import {useContext} from "react";
import {PlayListContext} from "../contexts/playlist-context"
export default function CreatePlayList()
{
    
    const {playListName,setPlayListName} = useContext(PlayListContext)
    const {dispatch} = useContext(PlayListContext)
    return (
        <div className="playlist">
        <h2>Add a Playlist</h2>
        <input onChange={(e)=>setPlayListName((playListName)=>
    {
        return {...playListName,name:e.target.value}
    }
)} className="playlist__name" value={playListName.name} type="text" ></input>
        <input onClick={()=>{
            setPlayListName({...playListName,name:""})
            dispatch({type:"CreatePlayList",payload:playListName})
        }}  className="playlist__create" type="button" value="Create"/>
        </div>
    )
}

