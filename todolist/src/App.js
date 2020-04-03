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
      isDisplayTaskForm:false,
      isDisplayEditForm:false,
      editTask:null
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
  
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  randomID(){
    return this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4();
  }
  onHandleAddTask=()=>{
    this.setState({
      isDisplayTaskForm:true,
      isDisplayEditForm:false,
      editTask:null
    })
  }
  onCloseForm=(value)=>{
   this.setState({
     isDisplayTaskForm:false,
     isDisplayEditForm:false,
     editTask:null
   })
  }
  onSubmit=(data)=>{
    var {tasks}=this.state;
   if(data.id!==''){
    var index=this.findIndex(data.id);
    if(index!==-1){
      tasks[index]=data;
    }
    }
   else{
    data.id=this.randomID();
    tasks.push(data);
   
   }
   this.setState({
    isDisplayTaskForm:true,
    isDisplayEditForm:false,
    editTask:null,
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
  onDelete=(value)=>{
    this.onCloseForm();
    var {tasks}=this.state;
    var index=this.findIndex(value);
    if(index!==-1){
      tasks.splice(index, 1);
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks)); 
    }
  }
  onOpenEditForm=(value)=>{
   this.setState({
     isDisplayEditForm:value,
     isDisplayTaskForm:false
   });
 // console.log(value);
  }
  onDisplayEditTask=(data)=>{
    this.setState({
      editTask:data
    })
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
    var {tasks,isDisplayTaskForm,isDisplayEditForm}=this.state;
    var elmTaskForm= (isDisplayTaskForm||isDisplayEditForm)?<TaskForm editTask={this.state.editTask} onCloseForm={this.onCloseForm} onSubmit={this.onSubmit}  isDisplayEditForm={this.state.isDisplayEditForm} />:'';
    
    return (
      
      <div className="container">
        <div className="text-center">
          <h1>Quản lí công việc</h1>
          <hr/>
        </div>
        
          
          <div className="row">
            <div className={(isDisplayTaskForm||isDisplayEditForm)?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>
             {elmTaskForm}
             
            </div>

            
            <div className={(isDisplayTaskForm||isDisplayEditForm)?'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
              
              <button type="button" className="btn btn-primary" onClick={this.onHandleAddTask}><span className="fa fa-plus mr-5"></span> Add task</button> &nbsp;
             
           
            <hr/>
            <div className="row mt-15">
             <Control/>
            </div>
            <hr/>
            <div className="row mt-15">
                  <TaskList tasks={tasks} onDisplayEditTask={this.onDisplayEditTask} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete} onOpenEditForm={this.onOpenEditForm}/>
             </div>
            
            </div>
            
          
          
        </div>
        </div>
      
    );
  }
}

export default App;

