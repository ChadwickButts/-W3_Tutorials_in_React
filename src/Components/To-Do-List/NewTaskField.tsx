import React from 'react';
import './todo.css';

type newFieldPropTypes = {
    taskText: string,
    onHandleInputChange: (InputEvent) => void,
    onHandleAddClick: (MouseEvent) => void
}

export default class NewTaskField extends React.Component< newFieldPropTypes, {}> {
    constructor(props) {
        super(props);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleInputChange(event) {
        this.props.onHandleInputChange(event);   
    }

    handleAddClick(event) {
        this.props.onHandleAddClick(event);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.taskText} onChange={this.handleInputChange} id="myInput" placeholder="Enter Task..." ></input>
                <button className="addBtn" type="button" onClick={this.handleAddClick}>Add</button>
            </div>
        );
    }
}