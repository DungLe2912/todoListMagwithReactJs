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
      tasks:[],//id,name,status
      isDisplayTaskForm:false
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
  // onGenerateData=()=>{
  //   var tasks=[
  //     {
  //       id:this.randomID(),
  //       name:'Action1',
  //       status:true
  //     },
  //     {
  //       id:this.randomID(),
  //       name:'Action2',
  //       status:false
  //     },
  //     {
  //       id:this.randomID(),
  //       name:'Action3',
  //       status:true
  //     }
  //   ];
  //   this.setState({
  //     tasks:tasks
  //   })
  //   localStorage.setItem('tasks',JSON.stringify(tasks)); 
  //   console.log(tasks);
  // }
  
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  randomID(){
    return this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4();
  }
  onHandleAddTask=()=>{
    this.setState({
      isDisplayTaskForm:true
    })
  }
  onCloseForm=(value)=>{
   this.setState({
     isDisplayTaskForm:value
   })
  }
  onSubmit=(data)=>{
    var tasks=this.state.tasks;
   data.id=this.randomID();
   tasks.push(data);
   this.setState({
     tasks:tasks
   });
   localStorage.setItem('tasks',JSON.stringify(tasks)); 
  }
  onUpdateStatus=(value)=>{
    var {tasks}=this.state;
    var index=this.findIndex(value);
    if(index!==-1){
      tasks[index].status=!tasks[index].status;
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks)); 
    }
  }
  findIndex=(id)=>{
    var{tasks}=this.state;
    var result=-1;
    tasks.forEach((tasks,index)=>{
      if(tasks.id===id){
        result= index;
      }
    });
    return result;
  }
  render() {
    var {tasks,isDisplayTaskForm}=this.state;
    var elmTaskForm= isDisplayTaskForm?<TaskForm onCloseForm={this.onCloseForm} onSubmit={this.onSubmit}/>:''
    return (
      
      <div className="container">
        <div className="text-center">
          <h1>Quản lí công việc</h1>
          <hr/>
        </div>
        
          
          <div className="row">
            <div className={isDisplayTaskForm?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>
             {elmTaskForm}
             
            </div>

            
            <div className={isDisplayTaskForm?'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              
              <button type="button" className="btn btn-primary" onClick={this.onHandleAddTask}><span className="fa fa-plus mr-5"></span> Add task</button> &nbsp;
             
           
            <hr/>
            <div className="row mt-15">
             <Control/>
            </div>
            <hr/>
            <div className="row mt-15">
                  <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus}/>
             </div>
            
            </div>
            
          
          
        </div>
        </div>
      
    );
  }
}

export default App;

