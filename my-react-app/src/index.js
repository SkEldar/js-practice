import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';





class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
             count : 3
        };
          
    }
        render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={Click}>Click me </button>
            </div>
        )
        }
}

function Click(){
    this.setState({count : 0});
  
}

render(<Button/>,document.getElementById('root'));