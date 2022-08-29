
import { useState } from "react";
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from "../state/StateProvider";
import { actiontypes } from "../state/reducer";
import './searchBar.css'


const SearchBar=function(){
   let navigate=useNavigate();
   const [input,setInput]=useState("");
//    const [{},dispatch]=useStateValue();

  const inputChange =function(e){
    setInput(e.target.value);
    
  }

  const Search=function(e){
      e.preventDefault()
    //action is dispatched
    // dispatch({
    //     type:actiontypes.SET_SEARCH_TERM,
    //     term:input
    // })
      navigate(`/searchResults/${input}`)
  }

    return (
        <form className='search-bar-cont' onSubmit={e=>Search(e)}>
            <SearchOutlinedIcon/>
            <input  className="search-bar" value={input} onChange={e=>{inputChange(e)}} placeholder="Search Google or type a URL"/>
            <MicOutlinedIcon/>           
        </form>
        
    )
}

export default SearchBar