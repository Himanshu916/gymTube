import {useEffect} from "react";
import axios from "axios";
import Topics from "../Topics";
import {useVideoContext} from "../../contexts/video-context"
import {Outlet} from "react-router-dom";
import ShowVideo from "../ShowVideo"

export default function MuscleGain()
{
    const {state,dispatch} = useVideoContext();
    const {muscleGainVideos} = state;

    useEffect(()=>
    {
        (async function()
        {
            const {data} = await axios.get("https://videolibrarybackend.herokuapp.com/api/muscleGain");
         
           dispatch({type:"setMuscleGainVideos",payload:data})

        })()
    },[dispatch])
    return(
     
        <div>
            <h1 className="videoHeading">Muscle gain Videos</h1>
            <div className="cards">
             {
                 muscleGainVideos.map(item=>
                    {
                        return (
                             <ShowVideo item={item}/>
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



