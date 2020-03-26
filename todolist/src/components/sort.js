/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../App.css'
class sort extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Sort &nbsp; <span className="fa fa-caret-square-o-down ml-5"></span>
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                              <li>
                                  <a role="button">
                                              <span className="fa fa-sort-alpha-asc pr-5">&nbsp;
                                                  Name A-Z
                                              </span>
                                          </a>
                              </li>
                              <li>
                                  <a role="button">
                                              <span className="fa fa-sort-alpha-desc pr-5">&nbsp;
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
            
        );
    }
}

export default sort;