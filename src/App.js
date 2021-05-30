import React, { Component } from 'react';
import Login from './component/Login';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);


    this.state = {
      form :{ password:""}
    }
  }

  confidential = [
    {
      username: "ayan",
      password:"ayan"
    },
    {
      username: "omer",
      password:"omer"
    }
  ]
  
  handleChange =(key , items)=>{
    const { form } = this.state;
    // console.log(key, items);
    this.setState({form :{...form,[key]:items} })
  }
  handleLogin = () => {
    // const { form } = this.state;
  }
  handleSubmit =(event)=>{
    const { form } = this.state;
    event.preventDefault();
    if ([undefined,null,'',false].includes(form.username)){
      alert("ENTER USERNAME")
    }
    if ([undefined,null,'',false].includes(form.password)) {
      alert("ENTER PASSWORD")
    }
    let result = this.confidential.find((item)=>{
      return item.username === form.username && item.password === form.password;
    })
    if (result) {
      return this.props.history.push('/Record')
      // return window.location.assign("http://localhost:3000/record");
    }
    else {
      alert("NOT MATCH")
    }
  }

  render(){
    return (
      <>
        <div className="App">
            <Login form ={this.state.form} handleChange ={this.handleChange} handleSubmit = {this.handleSubmit} handleLogin = {this.handleLogin} />
        </div>  
      </>
    );
  }
}

export default App;
