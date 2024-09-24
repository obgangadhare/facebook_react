import React,{Component} from 'react';

import JSON from './db.json'; // ref to the dbclothes.json data file
import Feedschild from './Feedschild';
import './feeds.css';

class Feeds extends Component{
    constructor(){
        super();
        this.state = { // state
            title: '', //props
            products: JSON // asign the dbclothes.json data file to the prop 
        }
    }
    render(){
        return(
            <div className='feedsall'>
                <h2>{this.state.title}</h2>
              <Feedschild prodlist={this.state.products}/>
            </div>
        )
    }
    
}
export default Feeds;