import React from 'react';
import './todo.css';

export default class ToDoList extends React.Component<{}, { taskList: Array<React.ReactElement>, taskText: string, id: number }> {
    constructor(props: Object) {
        super(props);
        this.state = { taskList: [], taskText: "", id: 1};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
    }

    handleInputChange (event: React.FormEvent<HTMLInputElement>) {
        this.setState({ taskText: event.currentTarget.value  });
    }

    handleAddClick(event: React.MouseEvent) {
       let tasks = this.state.taskList;
       const newTask = <li key={this.state.id.toString()} id={this.state.id.toString()} onClick={this.handleListItemClick}>{this.state.taskText} <span className="close" onClick={this.handleRemoveClick} >x</span></li>;

       tasks.push(newTask);
       // example of using callback to access state in handler setState call
       this.setState((state) => {
            return {
                taskList: tasks, 
                taskText: "", 
                id: state.id+1
             }
        });
    }

    handleRemoveClick(event: React.MouseEvent) {
        const key = event.currentTarget.parentElement.id;
        let index = this.state.taskList.findIndex(task => task.key === key); 

        let newTaskList = [...this.state.taskList.slice(0,index), ...this.state.taskList.slice(index+1)];
        this.setState({ taskList: newTaskList });
    }

    handleListItemClick(event: React.MouseEvent) {
        const target = event.currentTarget;
        if (target.classList.contains('checked')) {
            target.classList.remove('checked');
        } else {
            target.classList.add('checked');
        }
    }

    render() {
        return (
            <div id="todoApp">
                <div id="MyDiv" className="header">
                    <h2>React To-Do List</h2>
                    <input type="text" value={this.state.taskText} onChange={this.handleInputChange} id="myInput" placeholder="Enter Task..." ></input>
                    <button className="addBtn" type="button" onClick={this.handleAddClick}>Add</button>
                </div> 

                <ul id="myUL">
                    {this.state.taskList}
                </ul>
            </div>

        )
    }
}