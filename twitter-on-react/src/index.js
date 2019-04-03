import React,{Component} from 'react';
import {render} from 'react-dom';

class Tweet extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
        render(){
            return(
            <div>
                <button>ok</button>
            </div>
            )
        }
}

render(<Tweet/>,document.getElementById('root'));