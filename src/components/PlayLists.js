import {useContext} from "react";
import CreatePlayList from "../components/createPlayList"
import {PlayListContext} from "../contexts/playlist-context";
import {Link} from "react-router-dom";


export default function PlayLists()
{
    const {itemsInPlayList} = useContext(PlayListContext);
    

    return(
        <>
        <CreatePlayList/>

        <div className="seePlayLists">
            
        {itemsInPlayList.map(playlist=>
        {
           return <li key={playlist.name} className="seePlayList">
           <Link style={{textDecoration:"none"}} to={`/playlists/${playlist.name}`}>
           <h2>{playlist.name} <span>(Videos : {`${playlist.content.length}`} )</span></h2>
           </Link>
         
               
            </li>
        })}
        </div>
     
        </>
    )
}