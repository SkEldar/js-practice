import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      currentInput: ""
    };
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

  render() {
    //   var toDoList = this.state;
    // var toDoThings = toDoList.map(function(info) {
    //     return  info;   
    // });
    console.log(this.state.currentInput);
    return (
      <div>
        <h1>Write thing that you need to do</h1>
        <input
          style={{ width: "50vh" }}
          value={this.state.currentInput}
          onChange={this.handleChange}
        />
        <button onClick={this.addToState}> Add To List </button>
       
        {this.state.info.map(function(thing){
         return <div key={thing}>{thing} </div>
        })} 

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


