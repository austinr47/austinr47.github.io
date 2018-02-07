import React, { Component } from 'react';
import '../css/ToDo.css';

export default class ToDo extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {task: 'Master JavaScript (ES6)', completed: false},
                {task: 'Take out the trash', completed: false}, 
                {task: 'Walk the dog', completed: true}, 
                {task: 'Learn React Animations', completed: false},
            ],
            task: '',
        }
        this.addTask=this.addTask.bind(this)
        this.inputTask=this.inputTask.bind(this)
    }

    addTask() {
        let obj = {task: this.state.task, completed: false}
        this.setState({
            list: [...this.state.list, obj],
            task: ''
        })
    }

    inputTask(value) {
        this.setState({
            task: value
        })
    }

    delete(value) {
        let newList = this.state.list
        newList.splice(value, 1)
        this.setState({
            list: newList
        })
    }

    complete(item, index) {
        let update = this.state.list
        update[index].completed = !update[index].completed
        // console.log(update)
        this.setState({
            list: update
        })
    }

    render() {
        const lists = this.state.list.map((item, index) => {
            let completed = item.completed ? 'todo-list todo-task-completed' : 'todo-list todo-task-not-completed'
            let button = item.completed ? 'todo-button todo-button-completed' : 'todo-button'
            return <div key={index} className={completed}>
                <button className={button} onClick={() => {this.complete(item, index)}}></button>
                <div className='todo-task'>{item.task}</div>
                <button className='todo-delete-button' onClick={() => {this.delete(index)}}>X</button>
            </div>
        })
        return (
            <div className="todo-main">
                <div className="todo-title">To-Do List</div>
                <div className="todo-input">
                    <input className="todo-input-1" value={this.state.task} placeholder="Add Task" onChange={(event) => {this.inputTask(event.target.value)}}/><button disabled={!this.state.task} className="todo-add-button" onClick={() => this.addTask()}>Add</button>
                </div>
                <div className="todo-list-3">
                    {lists}
                </div>
            </div>
        );
    }
}