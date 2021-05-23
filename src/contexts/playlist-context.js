import {createContext,useReducer,useState} from "react";

export const PlayListContext = createContext();

export function PlayListProvider({children})
{
    const [state,dispatch] = useReducer(reducer,{itemsInPlayList:[]});
    const [playListName,setPlayListName] = useState({name:"",content:[]});
    return(
        <PlayListContext.Provider value={{dispatch,itemsInPlayList:state.itemsInPlayList,playListName,setPlayListName}}>
            {children}
        </PlayListContext.Provider>


    )
}
 

function reducer(state,action)
{
    switch(action.type)
    {
        case "AddToPlayList" :
            const newPlayLists = state.itemsInPlayList.map(item=>
                {
                    
                    if(item.name === action.payload.name)
                    {
                        return {...item,content:[...item.content,action.payload.video]}
                    }
                    return item
                })
             
      
            return {...state,itemsInPlayList:newPlayLists}
        case "CreatePlayList":
            
           
            return (
                {...state,itemsInPlayList:[...state.itemsInPlayList,action.payload]}
            )
        case "RemoveFromPlayList" :
            console.log("removing from playlist")
            break;
        case "AddToLikeVideos" :
            console.log("adding to like videos");
            break;
        default:
            console.log("wrong cHoice")
    }
}