import React,{Component} from 'react'

class App extends Component {
        state = {
            info : 'text1'
        }

       render() { return(
            <div>
                <h1>{this.state.info}</h1>       
            </div>
        )}
};

export default App
