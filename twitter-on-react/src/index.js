import React,{Component} from 'react';
import {render} from 'react-dom';
import Tweetbox from './Tweetbox';
import '../src/style.css';


class Tweet extends Component{
    constructor(props){
        super(props);
        this.state = {
            info : [],
            currentInput: ""
        }
    }
    handleChange = event => {
        this.setState({ currentInput: event.target.value });
      };
    
      addToState = () => {
        let info = this.state.info;
        info.push(this.state.currentInput);
        this.setState({ info });
        this.setState({currentInput : ""});
      };

    //  Click = event => {
    //      console.log(event);
    //  } 

        render(){
          console.log(this.state.currentInput)
            return(
            <div className="tweet"> 
            <img src={require('./img/unnamed.jpg')} alt={'user-icon'} className="user-icon"/>
            <input      value={this.state.currentInput}
          onChange={this.handleChange} className="text" placeholder="What’s happening?"></input>
            <img src={require('./img/plus.png')} alt={'plus-icon'} className="plus-icon"/>
            <button className="tweet-button" onClick={this.addToState}>Tweet</button>
            <div className="icons">

            </div>
               {/* <Tweetbox key={this.state.info}/> */}
            
            </div>
            )
        }
}

render(<Tweet/>,document.getElementById('root'));