import {useEffect} from "react";
import axios from "axios";
import Topics from "../Topics";
import {useVideoContext} from "../../contexts/video-context"
import {Outlet} from "react-router-dom";
import ShowVideo from "../ShowVideo"

export default function FatLoss()
{
    const {state,dispatch} = useVideoContext();
    const {fatLossVideos} = state;

    useEffect(()=>
    {
        (async function()
        {
            const {data} = await axios.get("http://localhost:5000/api/fatLoss");
            console.log(data)
           dispatch({type:"setFatLossVideos",payload:data})

        })()
    },[dispatch])
    return(
     
        <div>
            <h1>Fat Loss Videos</h1>
            <div className="cards">
             {
                 fatLossVideos.map(item=>
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



