import React, { Component } from 'react';
import './scrumboard.css';
import Data from '../static/data';
import Tasks from '../tasks';
import AddTask from './addTask';
import Users from './users/users';
import axios from 'axios';

export class Scrumboard extends Component {
  constructor (props){
    super(props);

    this.state = {
      data: Data,
      isOpen: false,
      tasks: []
    }
  }

  addTask = (task) => {
    task.id  = Math.random().toString(36).slice(2,9)
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks
    })
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id
    })
    this.setState({
      tasks
    })
  }

  componentDidMount() {
    axios.get('http://liveapi.chatscrum.com/scrum/api/scrumgoals/')
        .then(res => this.setState({
            tasks: res.data
        }))
  }
   
  render() {
    return (
      <div className='scrumboard'>
        <nav>
          <h1>CHATSCRUM</h1>
          <div className='var'>
            <p>User type: {Data.usertype}</p>
            <p>Project Name: {Data.projectname}</p>
          </div>
        </nav>
        <p id = 'info'>Hello {Data.fullname}, welcome to your scrumboard</p>

        {/* Weekly and Daily Tasks Section*/}
        <Tasks data = {this.state.tasks} deleteTask = {this.deleteTask}/>

        {/*Pop-Up Modal form */}
        <AddTask addTask = {this.addTask}/>

        {/* API Data List */}
        <Users/>
        
      </div>
    )
  }
}

export default Scrumboard