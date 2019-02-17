import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ToDoItem from './components/toDoItem'
import { string } from 'postcss-selector-parser';

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

  deleteItem = (item) => {
        var array = this.state.info;
      var indexOfItem = array.indexOf(item);
      if(indexOfItem === -1) {
        return alert('error')
    } else{
      array.splice(indexOfItem,1);
    }
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
         return <ToDoItem key={thing} thing={this.props.data} />
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
