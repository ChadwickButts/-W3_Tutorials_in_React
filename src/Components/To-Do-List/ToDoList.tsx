import React from 'react';
import NewTaskField from './NewTaskField';
import './todo.css';
import ToDoListItem from './ToDoListItem';

type taskObject = {
    itemKey: number, 
    taskText: string, 
    status: string
}

export default class ToDoList extends React.Component<{}, { taskList: Array<taskObject>, taskText: string, id: number  }> {
    constructor(props: Object) {
        super(props);
        this.state = { taskList: [], taskText: "", id: 1 };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
    }

    storeTaskList(taskList: Array<Object>) {
        
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }

    componentDidMount() {
        if (localStorage.getItem('taskList')) {
            let storedTasks = JSON.parse(localStorage.getItem('taskList'));
            this.setState({
                taskList: storedTasks
            })
        }
    }

    componentDidUpdate(prevprops, prevState) {    
        if (prevState.taskList !== this.state.taskList) {
            this.storeTaskList(this.state.taskList);
        }        
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
           taskList: [...state.taskList, { taskText: state.taskText, itemKey: state.id, status: "incomplete" }],
           taskText: "",
           id: state.id + 1
        }));
    }

    handleRemoveClick(event) {
        let listItem = event.target.parentElement;
        let taskList = this.state.taskList.filter((task: taskObject) => task.itemKey.toString() !== listItem.id);

        // updating state here automatically removes item because of re-render
        this.setState({ taskList });

        event.stopPropagation();
    }

    handleListItemClick(event: React.MouseEvent) {
        const listItem = event.currentTarget;
        let newTaskList = this.state.taskList.filter((task: taskObject) => task.itemKey.toString() !== listItem.id);
        let targetTask: taskObject = this.state.taskList.filter((task: taskObject) => task.itemKey.toString() === listItem.id)[0];


        if (targetTask.status === "incomplete") {
            let updateTask = { 
                taskText: targetTask.taskText,
                itemKey: targetTask.itemKey,
                status: "complete",
            };

            this.setState({
                taskList: [...newTaskList, updateTask].sort((t1, t2) => t1.itemKey - t2.itemKey)
            });
        } else {
            let updateTask = { 
                taskText: targetTask.taskText,
                itemKey: targetTask.itemKey,
                status: "incomplete",
            };

            this.setState({
                taskList: [...newTaskList, updateTask].sort((t1, t2) => t1.itemKey - t2.itemKey)
            });
        }
    }

    render() {
        const tasks = this.state.taskList.map( (task: {itemKey: number, taskText: string, status: string }) => {
            return <ToDoListItem key={task.itemKey} itemKey={task.itemKey} taskText={task.taskText} status={task.status} onHandleListItemClick={this.handleListItemClick} onHandleRemoveClick={this.handleRemoveClick}/>
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