import React,{Component} from "react"

class Article extends Component {
    state = {
        isOpen : true
    }
         handleClick = () => {
            console.log(1);
            this.setState({
                isOpen : !this.state.isOpen
            })
        }

    render() {
        const {article} = this.props

    const body = this.state.isOpen && <section className="card-text">{article.text}</section>
    return (
        <div className="card">
        <div className="card-header">
            <h2>{article.title}
            <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
            {this.state.isOpen ? "close" : "open"}
            </button>
            </h2>
            </div>
            <div className="text-body">
            {body}
            <h6 className="card-subtitle text-muted">creation date : {(new Date(article.date)).toDateString()}</h6>
            </div>
        </div>
    )
    }
}

export default Article