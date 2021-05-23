import {useEffect} from "react";
import axios from "axios";
import Topics from "./Topics";
import {useVideoContext} from "../contexts/video-context"
import {Outlet} from "react-router-dom";
import ShowVideo from "../components/ShowVideo"

export default function Home()
{
    const {state,dispatch} = useVideoContext();
    const {recommendedVideos} = state;

    useEffect(()=>
    {
        (async function()
        {
            const {data} = await axios.get("http://localhost:5000/api/recommendedVideos");
          
           dispatch({type:"setRecommendedVideos",payload:data})

        })()
    },[dispatch])
    return(
     
        <div>
            <h1 className="videoHeading">Recommended Videos</h1>
            <div className="cards">
             {
                 recommendedVideos.map(item=>
                    {
                        return (
                        

                         
                             <ShowVideo key={item._id} item={item}/>
                            
                               
                                ) 
                    }
                )
}
            </div>
            <Outlet/>
            <Topics/>
        </div>
    )
}



