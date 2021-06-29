import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Movie Browser</h2> 
                        </div>
                        <div className="col-md-9">
                            <input type="search" placeholder="Type something here to search.." className="form-control"/>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;