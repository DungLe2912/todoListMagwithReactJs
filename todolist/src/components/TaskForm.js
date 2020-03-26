import React, { Component } from 'react';
import '../App.css'
class TaskForm extends Component {
    render() {
        return (
            <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Add task</h3>
            </div>
            <div className="panel-body">
             
             <form>
               <div className="form-group">
                 <label>Name task :</label>
                 <input type="text" className="form-control"/>
               </div>
              <label>Status :</label>
               
               <select className="form-control" required="required">
                 <option value="1">Active</option>
                 <option value="0">Hide</option>
               </select>
               <br/>
               <div className="text-center">
               <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-5"></span>Add</button>&nbsp;
                  <button type="submit" className="btn btn-danger"><span className="fa fa-remove mr-5" aria-hidden="true"></span>Cancel</button>
               </div>
             </form>
            </div>
        </div>
        
     
        );
    }
}

export default TaskForm;