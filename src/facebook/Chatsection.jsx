import React,{Component} from "react";

import './App.css';

class Chatsection extends Component{ 
    render(){
        return(
            <div className="right-side">
            <p className="suggested">suggested</p>
            <div className="friends-grp">
            <iframe className="iframefrd" width="320" height="250" src="https://www.youtube.com/embed/0fvthzwqNbE?si=OJ-cN-5021ro10sp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p className="cnts">Contacts</p>
            <p className="cnts1">... </p>
            <p className="frd1"> Rajvardhan Powar </p>
            <p className="frd2"> Utkarsh Kadam </p>
            <p className="frd3"> Avadhut Mane </p>
            <p className="frd4"> Omkar Pawle </p>
            <p className="frd5"> Mukul Kamble </p>
            <p className="frd6"> Omkar Patil </p>

            <div className="frdlist1"></div>
            <div className="frdlist2"></div>
            <div className="frdlist3"></div>
            <div className="frdlist4"></div>
            <div className="frdlist5"></div>
            <div className="frdlist6"></div>
            
 
           
         </div>
     
        );
    }
};

export default Chatsection;