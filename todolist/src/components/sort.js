/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../App.css'
class sort extends Component {
    constructor(props) {
        super(props);
        this.state={
            sort:{
                by:'name',
                value:1
            }
        };
    }
    
    onClick=async(sortBy,sortValue)=>{
        await this.setState({
            sort:{
                by:sortBy,
                value:sortValue
            }
        });
        this.props.onClick(this.state.sort);
    }
    render() {
        var{sort}=this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Sort &nbsp; <span className="fa fa-caret-square-o-down ml-5"></span>
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                              <li onClick={()=>this.onClick('name',1)}>
                                  <a role="button" className={(sort.by==='name'&&sort.value===1)?"sort_selected":""}>
                                              <span className="fa fa-sort-alpha-asc pr-5">&nbsp;
                                                  Name A-Z
                                              </span>
                                          </a>
                              </li>
                              <li onClick={()=>this.onClick('name',-1)}>
                                  <a role="button" className={(sort.by==='name'&&sort.value===-1)?"sort_selected":""}>
                                              <span className="fa fa-sort-alpha-desc pr-5">&nbsp;
                                                  Name Z-A
                                              </span>
                                          </a>
                              </li>
                              <li role="separator" className="divider"></li>
                              <li onClick={()=>this.onClick('status',1)}><a role="button" className={(sort.by==='status'&&sort.value===1)?"sort_selected":""}>Active Status</a></li>
                              <li onClick={()=>this.onClick('status',-1)}><a role="button" className={(sort.by==='status'&&sort.value===-1)?"sort_selected":""}>Hide Status</a></li>
                          </ul>
                      </div>
            </div>
            
        );
    }
}

export default sort;