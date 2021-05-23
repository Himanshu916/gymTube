import {useEffect} from "react";
import axios from "axios";
import Topics from "../Topics";
import {useVideoContext} from "../../contexts/video-context"
import {Outlet} from "react-router-dom";
import ShowVideo from "../ShowVideo"

export default function DietPlan()
{
    const {state,dispatch} = useVideoContext();
    const {nutritionVideos} = state;

    useEffect(()=>
    {
        (async function()
        {
            const {data} = await axios.get("https://videolibrarybackend.herokuapp.com/api/nutrition");
        
           dispatch({type:"setNutritionVideos",payload:data})

        })()
    },[dispatch])
    return(
     
        <div>
            <h1 className="videoHeading">Nutrition Videos</h1>
            <div className="cards">
             {
                 nutritionVideos.map(item=>
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



