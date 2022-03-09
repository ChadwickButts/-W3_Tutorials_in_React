import React from 'react';
import NewTaskField from './NewTaskField';
import './todo.css';
import ToDoListItem from './ToDoListItem';

export default class ToDoList extends React.Component<{}, { taskList: Array<Object>, taskText: string, id: number }> {
    constructor(props: Object) {
        super(props);
        this.state = { taskList: [], taskText: "", id: 1};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }


    handleInputChange (event: React.FormEvent<HTMLInputElement>) {
        // Causes component to re-render every time user types 
        // Could move text state to field component so only that re-renders or use uncontrolled input
        this.setState({ taskText: event.currentTarget.value});
        //console.log(event.currentTarget.value);
    }

    handleAddClick(event: React.MouseEvent) {
       // example of using callback to access state in handler setState call
       // using spread to avoid mutating data (modifying original object) - performance optimization
       this.setState(state => ({
           taskList: [...state.taskList, { taskText: state.taskText, itemKey: state.id }],
           taskText: "",
           id: state.id + 1
        }));
    }

    handleRemoveClick(event) {
        let listItem = event.target.parentElement;
        let taskList = this.state.taskList.filter((task: {itemKey: number, taskText: string}) => task.itemKey.toString() !== listItem.id);

        // updating state here automatically removes item because of re-render
        this.setState({ taskList });

        event.stopPropagation();
    }

    render() {
        const tasks = this.state.taskList.map( (task: {itemKey: number, taskText: string}) => {
            return <ToDoListItem key={task.itemKey} itemKey={task.itemKey} taskText={task.taskText} onHandleRemoveClick={this.handleRemoveClick}/>
        });

        return (
            <div id="todoApp">
                <div id="MyDiv" className="header">
                    <h2>React To-Do List</h2>
                    <NewTaskField taskText={ this.state.taskText } onHandleAddClick={this.handleAddClick} onHandleInputChange={this.handleInputChange} />
                </div> 
                <ul id="myUL">
                    {tasks}
                </ul>
            </div>

        )
    }
}