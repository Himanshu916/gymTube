import {useParams,Link} from "react-router-dom";
import {useContext} from "react";
import {PlayListContext} from "../contexts/playlist-context"
import {getDescription} from "./VideoCard"
export default function PlayList()
{
    const {playlistname} = useParams();
    const {itemsInPlayList} = useContext(PlayListContext);
    const playlist = itemsInPlayList.find(item=>item.name ===playlistname);
    console.log(playlist);

    return (
        <>
        <h2 className="playlistTitle">You are welcome in playlist {playlistname}</h2>
                    <div className="cards specificplaylist">
             {
                 playlist.content.map(videoId=>
                    {
                        return (
                             
                                <div key={videoId} className="card specificplaylist--card">
                                <div className="responsive">
                                <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                                </div>
                                <div className="card__description">
                                    <Link style={{textDecoration:"none"}} to= {`/videos/${videoId}`}>
                                    <h3 >
                                        {getDescription(videoId)}
                                    </h3>
                                    </Link>
                                    {/* <div className="icons">
                                        <div className="icon" >
                                            <BookmarkBorderIcon style={{fontSize:"2rem"}}/>
                                        </div>
                                      
                                        <div  className="icon" >
                                          <Link to={`/createplaylist/${item.id}`}>
                                            <PlaylistAddIcon   style={{fontSize:"2rem"}}/>
                                            </Link>
                                      
                                        </div>

                                    
                                      
                                    </div> */}
                                </div>
                                </div>
                               
                                ) })}
            </div>


   </> )
}