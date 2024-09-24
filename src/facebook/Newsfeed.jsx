import React,{Component} from "react";
import story from'./fb_images/story.png';
import abc from'./fb_images/2.jpg';
import abcd from'./fb_images/3.jpg';
import abcde from'./fb_images/5.jpg';
import './App.css';

class Newsfeed extends Component{ 
    render(){
        return(
            <div class="middle">
            <div class="story">
                <div class="story1">
                    <img class="middleimg1" src={story}/>
                </div>
                <div class="story2">
                    <img class="middleimg1" src={abc}/>
                </div>
                <div class="story2">
                    <img class="middleimg1" src={abcd}/>
                </div>
                <div class="story2">
                    <img class="middleimg1" src={abcde}/>
                </div>
            </div>

           
                </div>
        );
    }
};

export default Newsfeed;