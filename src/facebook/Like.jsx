import React,{useState} from "react";
import "./Like.css"

function Like(){
    // Declare a new state variable, which we'll call "count"
    const [count, setCount]= useState(0);

    return(
        <div>
            <p className="licount">  <i class="fa-solid fa-thumbs-up"></i><p className="countnum">{count} </p></p>
            <button className="libtn" onClick={()=> setCount(count + 1)}>
            <i class="fa-regular fa-thumbs-up"></i> Like
            </button>

          
            
        </div>
        
    );
}
export default Like;