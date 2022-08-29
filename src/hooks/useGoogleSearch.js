import  { useEffect, useState } from "react";
import BASE_URL from "../assets/urls";

const useGoogleSearch=function(input){
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            fetch(BASE_URL+`${input}`)
            .then(response=>{
                response.json()
            })
            .then(result=>{
                setData(result)
            })
        }
        fetchData();
    },[input])

    return data
}
export default useGoogleSearch;