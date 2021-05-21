import {useEffect} from "react";
import axios from "axios";
import Topics from "../Topics";
import {useVideoContext} from "../../contexts/video-context"
import {Outlet} from "react-router-dom";
import ShowVideo from "../ShowVideo"

export default function BasicExercises()
{
    const {state,dispatch} = useVideoContext();
    const {basicExercises} = state;

    useEffect(()=>
    {
        (async function()
        {
            const {data} = await axios.get("http://localhost:5000/api/basicExercises");
            console.log(data)
           dispatch({type:"setBasicExercises",payload:data})

        })()
    },[dispatch])
    return(
     
        <div>
            <h1>Basic Exercise Videos</h1>
            <div className="cards">
             {
                 basicExercises.map(item=>
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



