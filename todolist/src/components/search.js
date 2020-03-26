import React, { Component } from 'react';
import '../App.css'
class search extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
            <div className="input-group">
                  <input type="text" className="form-control" placeholder="Enter key word..."/>
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-primary"><span className="fa fa-search mr-5"></span> Search</button>
                  </span>
                </div>
              
            </div>
            
        );
    }
}

export default search;