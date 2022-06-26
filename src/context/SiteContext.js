import {createContext, useEffect, useReducer} from 'react'
import { reducer } from '../reducer/SiteReducer';


export const GlobalContext = createContext();




const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,{
        theme : true,
        watch : localStorage.getItem("watch") ? JSON.parse(localStorage.getItem("watch")) : [],
        watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []
    })


   useEffect(() => {
    localStorage.setItem("watch", JSON.stringify(state.watch));
    localStorage.setItem("watched", JSON.stringify(state.watched))
   },[state])



    function changeTema(){
        dispatch({
            type : "CHANGE_TEMA",
            payload : !state.theme
        })
    }

    function addToWatch(movie){  
        dispatch({
            type : "ADD_WATCH",
            payload : movie
        })              
    }

    function addToWatched(movie){
        dispatch({
            type : "ADD_WATCHED",
            payload : movie
        })
    }

    function removeToWatched(id){
        dispatch({
            type : "REMOVE_WATCHED",
            payload : id
        })
    }
    function removeToWatch(id){
        dispatch({
            type : "REMOVE_WATCH",
            payload : id
        })
 
    }

    function getToWatched(item){
        dispatch({
            type : "GET_WATCHED",
            payload : item
        })
    }




   const data = {
     changeTema,state,addToWatch,addToWatched,removeToWatched,removeToWatch,getToWatched
   }

    return(
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider;