import React,{Component} from "react";
import omkar from './fb_images/omkar.jpg';
import findfriend from './fb_images/find-friend.png';
import logo from './fb_images/logo.png';
import alarm_11523218 from './fb_images/alarm_11523218.png';
import saved from './fb_images/Saved.png';
import grp from './fb_images/grp.png';
import multimedia from './fb_images/multimedia.png';
import more from './fb_images/more.png';
import './App.css';

class Home extends Component{ 
    render(){
        return(
            <div className="all-div">

        <div className="left-side">
            <div className="user-name">
                <img className="image" src={omkar}/>
                <div className="name">Omkar Gangadhare</div>
            </div>
            <div className="list">
                <img className="image1" src={findfriend}/>
                <div className="name1">Find friends</div>
            </div>
            <div className="list">
                <img className="image1" src={logo}/>
                <div className="name1">Welcome</div>
            </div>
            <div className="list">
                <img className="image1" src={alarm_11523218}/>
                <div className="name1">Memories</div>
            </div>
            <div className="list">
                <img className="image1" src={saved}/>
                <div className="name1">Saved</div>
            </div>
            <div className="list">
                <img className="image1" src={grp}/>
                <div className="name1">Groups</div>
            </div>
            <div className="list">
                <img className="image1" src={multimedia}/>
                <div className="name1">Video</div>
            </div>
           
            <div className="list">
                <img className="image1" src={more}/>
                <div className="name1">See more</div>
            </div>
            <div className="btm-txt">
                <p>Privacy · Terms · Advertising · Ad choices <br/>
                    · Cookies · more · Meta © 2024</p>
            </div>
        </div>
        </div>
        );
    }
};

export default Home