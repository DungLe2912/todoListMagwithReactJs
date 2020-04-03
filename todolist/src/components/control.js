/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Search from './search'
import Sort from './sort'
import '../App.css'
class control extends Component {
   
    
    render() {
    
        return (
            <div>
                {/*Search*/}
                <Search onSearch={this.props.onSearch}/>
                 {/*Sort*/}
                 <Sort/>
            </div>
        );
    }
}

export default control;