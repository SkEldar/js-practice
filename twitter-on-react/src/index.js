import React,{Component} from 'react';
import {render} from 'react-dom';
import '../src/style.css';


class Tweet extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
        render(){
            return(
            <div className="tweet"> 
            <img src={require('./img/unnamed.jpg')} alt={'user-icon'} id={'user-icon'}/>
            <input className="text" placeholder="What’s happening?"></input>
            
            <button className="tweet-button">Tweet</button>
            </div>
            )
        }
}

render(<Tweet/>,document.getElementById('root'));