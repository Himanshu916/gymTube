// import { Action } from "history";
import {useReducer,createContext} from "react";

export const NoteContext = createContext();
export  function NoteProvider({children})
{
    const [state,dispatch] = useReducer(reducer,{note:"",notes:[]})
    // {note:"",savednote:""}
   
    return(
      
        <NoteContext.Provider value={{note:state.note,dispatch,notes:state.notes}}>
        {children}
        </NoteContext.Provider>
  
    )
}

const reducer = (state,action)=>
{
    switch(action.type)
    {
        case "createnote" :
           
            return {...state,note:action.payload};
        case "savenote" :
           //   saving note for a paricular video 
            return {...state,notes:[...state.notes,{noteid:action.payload.id,savednote:action.payload.note}],note:""}

        default :
        console.console.log("wrong choice");
    }
}