import React from 'react';

import SearchUsers from './components/SearchUsers'
import UsersList from './components/UsersList'

import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchName:''
    }
  }

  setSearchName=(searchName)=>{
    this.setState({searchName})
  }
  render(){
    return (
        <div className='app'>
          <SearchUsers setSearchName={this.setSearchName}/>
          <UsersList searchName={this.state.searchName}/>
        </div>
    )
  }
}

export default App;
