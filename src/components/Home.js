import {useEffect,useState} from "react";
import axios from "axios";
import Topics from "./Topics";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {Link,Outlet} from "react-router-dom";


export default function Home()
{
    const [basicExercises,setBasicExercises] = useState([]);

 
    
 

    useEffect(()=>
    {
        (async function()
        {
            const {data} = await axios.get("./api/basicexercises");
           setBasicExercises([...basicExercises,...data.basicexercises])

        })()
    },[])
    return(
     
        <div>
            <h1>Recommended Videos</h1>
            <div className="cards">
             {
                 basicExercises.map(item=>
                    {
                        return (
                             
                                <div key={item.id} className="card">
                                <div className="responsive">
                                <iframe src={item.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                                </div>
                                <div  className="card__description">
                                    <Link style={{textDecoration:"none"}} to= {`/videos/${item.id}`}>
                                    <h3 >
                                        {item.description}
                                    </h3>
                                    </Link>
                                    <div className="icons">
                                        <div className="icon" >
                                            <BookmarkBorderIcon  style={{fontSize:"2rem",color:"darkgray"}}/>
                                        </div>
                                      
                                        <div  className="icon" >
                                          <Link   to={`/createplaylist/${item.id}`}>
                                            <PlaylistAddIcon   style={{fontSize:"2rem",color:"darkgray"}}/>
                                            </Link>
                                      
                                        </div>

                                    
                                      
                                    </div>
                                </div>
                                </div>
                               
                                ) })}
            </div>
            <Outlet/>
            <Topics/>
          
               
        </div>
    )
}



