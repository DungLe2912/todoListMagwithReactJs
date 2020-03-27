import React, { Component } from 'react';
import '../App.css'
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      status:false

    }
  }
  
  onCloseForm(value){
    this.props.onCloseForm(value);
  }
  onHandleChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    if(name==='status'){
      value=target.value==='true'?true:false;
    }
    this.setState({
      [name]:value
    })
  }
  onHandleSubmit=(event)=>{
    event.preventDefault();
    //console.log(this.state)
    this.props.onSubmit(this.state);
    this.onHandleClear();
    this.onCloseForm();
  }
  onHandleClear=()=>{
    this.setState({
      name:'',
      status:false
    })
  }
    render() {
    
        return (
            <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Add task <span className="fa fa-remove text-right" onClick={()=>this.onCloseForm(false)}></span></h3>
            </div>
            <div className="panel-body">
             
             <form onSubmit={this.onHandleSubmit}>
               <div className="form-group">
                 <label>Name task :</label>
                 <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onHandleChange}/>
               </div>
              <label>Status :</label>
               
               <select className="form-control" required="required" value={this.state.status} onChange={this.onHandleChange} name="status">
                 <option value={true}>Active</option>
                 <option value={false}>Hide</option>
                 
               </select>
               <br/>
               <div className="text-center">
               <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-5"></span>Add</button>&nbsp;
                  <button type="button" className="btn btn-danger" onClick={this.onHandleClear}><span className="fa fa-remove mr-5" aria-hidden="true" ></span>Cancel</button>
               </div>
             </form>
            </div>
        </div>
        
     
        );
    }
}

export default TaskForm;