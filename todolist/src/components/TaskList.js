import React, { Component } from 'react';
import TaskItem from './TaskItem';
import '../App.css'
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state={
            filterName:'',
            filterStatus:-1 //-1: all, 1: active, 0:hide
        }
    }
    
    onUpdateStatus=(value)=>{
        this.props.onUpdateStatus(value);
    }
    onDisplayEditTask=(data)=>{
        this.props.onDisplayEditTask(data);
    }
    onDelete=(value)=>{
        this.props.onDelete(value);
    }
    onOpenEditForm=(value)=>{
        this.props.onOpenEditForm(value);
    }
    onChange=(event)=>{
        var target=event.target;
        var name=target.name;
        var value=target.value;
        this.props.onFilter(
            name==='filterName'?value:this.state.filterName,
            name==='filterStatus'?value:this.state.filterStatus
        )
        this.setState({
          [name]:value
        })
      }
      onFilter=(filterName,filterStatus)=>{
        filterStatus=parseInt(filterStatus,10);
        this.setState({
          filter:{
            name:filterName.toLowerCase(),
            status:filterStatus
          }
        })
      }
    render() {
        var {tasks}=this.props;
        var elmTasks=tasks.map((tasks,index)=>{
            return <TaskItem key={tasks.id} index={index} tasks={tasks} onDisplayEditTask={this.onDisplayEditTask} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete} onOpenEditForm={this.onOpenEditForm}/>
        });
        var{filterName,filterStatus}=this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Index</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange}/>
                                    </td>
                                    <td>
                                        <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                                            <option value="-1">All</option>
                                            <option value="0">Hide</option>
                                            <option value="1">Active</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                               {elmTasks}
                              </tbody>
                        </table>
                    </div>
               
        );
    }
}

export default TaskList;