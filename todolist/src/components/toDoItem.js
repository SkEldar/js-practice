import React,{Component} from 'react';
import './style.css'


class ToDoItem extends Component {

    render() {
            return (
                <div className='parent'>
                    <p style={{marginRight:'10px'}}>{this.props.data}</p>
                    <button className='delete-button'>Delete</button>
                </div>
            )
    }
}
export default ToDoItem