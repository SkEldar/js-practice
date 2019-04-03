import React,{Component} from 'react';
import {render} from 'react-dom';





class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
             count : 0
        };
          
    }
    Click = () => {
        var count = this.state.count;
        count += 1;
        this.setState({count : count});
    }
    Click2 = () => {
        var count = this.state.count;
        count -= 1;
        this.setState({count : count});
    }
    Click3 = () => {
        var count = this.state.count;
        count = 0;
        this.setState({count : count});
    }
        render() {
        return (
            <div>
               <center> <p>{this.state.count}</p></center>
                <button onClick={this.Click}>Click me ++ </button>
                <button onClick={this.Click2}>Click me --</button>
                <button onClick={this.Click3}>Click me = 0</button>

            </div>
        )
        }
}



render(<Button/>,document.getElementById('root'));