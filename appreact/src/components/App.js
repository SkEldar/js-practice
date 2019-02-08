import React,{Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
state = {
    reverted : false
}

    render() {
    return (
        <div className="container">
        <div className="jumbotron" >
            <h1>App name</h1>
            <button className="btn" onCick={this.revert}>Revert</button>
            </div>
            <ArticleList articles = {this.state.reverted ? articles.reverse() : articles}/>
        </div>
    )
    }
    revert = () => this.setState({
        reverted : !this.state.revert
    })
};

export default App