import React, { Component } from 'react';
import TaskItem from './TaskItem';
import '../App.css'
class TaskList extends Component {
    render() {
        var {tasks}=this.props;
        var elmTasks=tasks.map((tasks,index)=>{
            return <TaskItem key={tasks.id} index={index} tasks={tasks}/>
        })
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
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <select className="form-control">
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