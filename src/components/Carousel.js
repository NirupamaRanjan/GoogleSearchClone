import { useState } from "react";
import images from "../assets/images";
import './Carousel.css'
const Carousel= function(){
    let [currIndex,setCurrentIndex]=useState(0);

    setTimeout(()=>{
      if(currIndex===images.length-1) currIndex=0;
      else{
          currIndex++;
      }
      setCurrentIndex(currIndex);
    },3000)

    return(
        <div className="carousel-cont">
       <img src={images[currIndex]} alt="Google" className="carousel"/>
       </div>
    )
  
}

export default Carousel