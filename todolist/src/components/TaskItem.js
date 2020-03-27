import React, { Component } from 'react';
import '../App.css'
class TaskItem extends Component {
    render() {
        var {tasks,index}=this.props;
        return (
            <tr>
            <td className="text-center">{index+1}</td>
            <td>{tasks.name}</td>
            <td className="text-center">
                <span className={tasks.status===true?'label label-primary':'label label-danger'}>
                            {tasks.status===true?'Active':'Hide'}
                        </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>&nbsp;Edit
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>&nbsp;Delete
                </button>
            </td>
        </tr>
    
        );
    }
}

export default TaskItem;