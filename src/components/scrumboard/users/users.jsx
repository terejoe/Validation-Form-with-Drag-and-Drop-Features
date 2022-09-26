import React, { Component } from 'react';
import './users.css';
import axios from  'axios'

export class Users extends Component {
    constructor(){
        super()

        this.state = {
            users: [],
            loading:true
        }
    }

    toggleModal = () => {
        if(this.state.isOpen){
            this.setState({
                isOpen: false
            })
        }else {
          this.setState({
            isOpen: true
          })  
        }
    }

    componentDidMount() {
        axios.get('http://liveapi.chatscrum.com/scrum/api/scrumusers/')
            .then(res => this.setState({
                users: res.data
            }))
    }
   render() {
    return (
      <div className='name'> 
        <h4 className = 'connected-users' onClick = {() => this.toggleModal()}>Connected Users</h4>
        <div id = 'user-list' className = {this.state.isOpen ? "show" : "hidden"}>
            {this.state.users.map(({nickname, id}) => {
                return(
                    <div className='user' key = {id}>
                        <span><i class="fas fa-user"> {nickname}</i></span>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}

export default Users