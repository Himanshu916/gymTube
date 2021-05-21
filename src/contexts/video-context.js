import {createContext,useReducer,useContext} from "react"


const VideoContext = createContext();

const reducer = (state,action)=>
{
    switch (action.type) {
        case "setBasicExercises":
            return {...state,basicExercises:[...action.payload]}
        case "setRecommendedVideos" :
            return {...state,recommendedVideos:[...action.payload]}
        case "setFatLossVideos" :
            return {...state,fatLossVideos:[...action.payload]}
        case "setMuscleGainVideos" :
            return {...state,muscleGainVideos:[...action.payload]}
        case "setNutritionVideos":
            return {...state,nutritionVideos:[...action.payload]}
        default:
            return state
    }

}
export const VideoProvider =({children})=>
{
    const [state,dispatch] = useReducer(reducer,{basicExercises:[],recommendedVideos:[],nutritionVideos:[],fatLossVideos:[],muscleGainVideos:[]})
    return (
        <VideoContext.Provider value={{state,dispatch}}>
            {children}
        </VideoContext.Provider>
    )

}

export const useVideoContext =()=> useContext(VideoContext);