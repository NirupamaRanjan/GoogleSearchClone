import React ,{createContext,useContext,useReducer} from "react";

// data layer
export const StateContext=createContext();

export const StateProvider=function(props){
    const reducer=props.reducer;
    const initialState=props.initialState
    const children=props.children
   return <StateContext.Provider value={useReducer(reducer,initialState)}>
       {children}   
   </StateContext.Provider>
}
// //This custom Hook which allows us to fetch data from data layer
export const useStateValue=function(){useContext(StateContext)}

