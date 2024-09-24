import React,{Component} from "react";
import ab from './fb_images/51.png'
import './App.css';

class Navbar extends Component{ 
    render(){
        return(
            <div className="nav">
            <img className="navimg1" src={ab} />
            <div className="searchbar">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>  
            <div className="home">
                <i className="fa-solid fa-house"></i>
            </div>
            <div className="friends">
                <i className="fa-solid fa-user-group"></i>
            </div>
            <div className="group">
                <i className="fa-solid fa-users-line"></i>
            </div>
            <div className="menu">
                <i className="fa-solid fa-table-cells"></i>
            </div>
            <div className="messenger">
                <i className="fa-brands fa-facebook-messenger"></i>
            </div>
            <div className="bell">
                <i className="fa-solid fa-bell"></i>
            </div>
            <div className="user">
                <i className="fa-solid fa-circle-user"></i>
            </div>
    
        </div>
        );
    }
};

export default Navbar;