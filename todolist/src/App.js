/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React, { Component } from 'react';
import TaskForm from './components/TaskForm'
import Control from './components/control'
import TaskList from './components/TaskList'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      tasks:[]//id,name,status
    }
  }
  componentWillMount(){
    if(localStorage&&localStorage.getItem('tasks')){
      var tasks=JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks:tasks
      })
    }
  }
  onGenerateData=()=>{
    var tasks=[
      {
        id:this.randomID(),
        name:'Action1',
        status:true
      },
      {
        id:this.randomID(),
        name:'Action2',
        status:false
      },
      {
        id:this.randomID(),
        name:'Action3',
        status:true
      }
    ];
    this.setState({
      tasks:tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
    console.log(tasks);
  }
  
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  randomID(){
    return this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4();
  }
  render() {
    var {tasks}=this.state;
    return (
      
      <div className="container">
        <div className="text-center">
          <h1>Quản lí công việc</h1>
          <hr/>
        </div>
        
          
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm/>
             
            </div>

            
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              
              <button type="button" className="btn btn-primary"><span className="fa fa-plus mr-5"></span> Add task</button> &nbsp;
              <button type="button" className="btn btn-danger" onClick={this.onGenerateData}> Generate Data</button>
           
            <hr/>
            <div className="row mt-15">
             <Control/>
            </div>
            <hr/>
            <div className="row mt-15">
                  <TaskList tasks={tasks}/>
             </div>
            
            </div>
            
          
          
        </div>
        </div>
      
    );
  }
}

export default App;

