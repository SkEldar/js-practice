import React,{Component} from 'react';

class App extends Component {
      constructor(props) {
             super(props);
              this.state = {
                   info : ['text1']
               };
             }

       render() { 
               let info = this.state.info;

return(
            <div>
                <h1>Write thing that you need to do</h1>       
                <input style={{width : '50vh'}}/>
                <button>Add To List</button>
            </div>
        )}
};

export default App