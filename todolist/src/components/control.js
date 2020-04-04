/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Search from './search'
import Sort from './sort'
import '../App.css'
class control extends Component {
    onClick=(sort)=>{
        this.props.onClick(sort);
    }
    render() {
        return (
            <div>
                {/*Search*/}
                <Search/>
                 {/*Sort*/}
                 <Sort onClick={this.onClick}/>
            </div>
        );
    }
}

export default control;