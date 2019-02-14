import React,{Component} from 'react';
import './style.css'

class ToDoItem extends Component {
    render() {
            return (
                <div className='parent'>
                    <p style={{marginRight:'10px'}}>Wo</p>
                    <button className='delete-button'>Delete</button>
                </div>
            )
    }
}
export default ToDoItem