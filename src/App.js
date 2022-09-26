import React from 'react';
import './App.css';

import Home from './components/home/home';
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import Scrumboard from './components/scrumboard/scrumboard';
import { Routes, Route} from 'react-router-dom';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '/signin' element = {<SignIn/>}/>
          <Route path = '/signup' element = {<SignUp/>}/>
          <Route path = '/scrumboard' element = {<Scrumboard/>}/>
        </Routes>  
      </div>
      
    )
  }
}


export default App;
