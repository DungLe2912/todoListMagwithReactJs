import React, { Component } from 'react';
import '../App.css'
class TaskItem extends Component {
    onUpdateStatus=(value)=>{
        this.props.onUpdateStatus(value);
    }
    onDelete=(value)=>{
        this.props.onDelete(value);
    }
    onDisplayEditTask=(data)=>{
        this.props.onDisplayEditTask(data);
    }
    onOpenEditForm=(value)=>{
        this.props.onOpenEditForm(value);
    }
    render() {
        var {tasks,index}=this.props;
       
        return (
            <tr>
            <td className="text-center">{index+1}</td>
            <td>{tasks.name}</td>
            <td className="text-center">
                <span className={tasks.status===true?'label label-primary pointer':'label label-danger pointer'} onClick={()=>this.onUpdateStatus(tasks.id)}>
                            {tasks.status===true?'Active':'Hide'}
                            
                        </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={()=>(this.onOpenEditForm(true),this.onDisplayEditTask(tasks))}>
                    <span className="fa fa-pencil mr-5"></span>&nbsp;Edit
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(tasks.id)}>
                    <span className="fa fa-trash mr-5"></span>&nbsp;Delete
                </button>
            </td>
        </tr>
    
        );
    }
}

export default TaskItem;