/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React, { Component } from 'react';

class App extends Component {
 
  render() {
    return (
      
      <div className="container">
        <div className="text-center">
          <h1>Quản lí công việc</h1>
          <hr/>
        </div>
        
        <div className="row">
          
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              
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
                     <button type="submit" className="btn btn-warning">Add</button>
                        <button type="submit" className="btn btn-danger">Cancel</button>
                     </div>
                   </form>
                  </div>
              </div>
              
            </div>

            
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              
              <button type="button" className="btn btn-primary"><span className="fa fa-plus mr-5"></span> Add task</button>
              
            </div>
            <hr/>
            <div className="row mt-15">
              
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
              <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter key word..."/>
                    <span className="input-group-btn">
                      <button type="button" className="btn btn-primary"><span className="fa fa-search mr-5"></span> Search</button>
                    </span>
                  </div>
                
              </div>
              
              
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                  Sort &nbsp; <span className="fa fa-caret-square-o-down ml-5"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>
                                    <a role="button">
                                                <span className="fa fa-sort-alpha-asc pr-5">
                                                    Name A-Z
                                                </span>
                                            </a>
                                </li>
                                <li>
                                    <a role="button">
                                                <span className="fa fa-sort-alpha-desc pr-5">
                                                    Name Z-A
                                                </span>
                                            </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li><a role="button">Active Status</a></li>
                                <li><a role="button">Hide Status</a></li>
                            </ul>
                        </div>
              </div>
              
            </div>
            <div className="row mt-15">
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
                                <tr>
                                    <td>1</td>
                                    <td>Học lập trình</td>
                                    <td className="text-center">
                                        <span className="label label-success">
                                                    Active
                                                </span>
                                    </td>
                                    <td class="text-center">
                                        <button type="button" class="btn btn-warning">
                                            <span class="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" class="btn btn-danger">
                                            <span class="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            
            </div>
            
          </div>
          
        </div>
        
      
    );
  }
}

export default App;

