import React, { Component } from 'react';

const a = { display:'flex'}
class Header extends Component {
    render() {
        return (
            <div className="alert alert-danger" style={a}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Movie Browser</h2> 
                        </div>
                        <div className="col-md-6">
                            <input type="search" placeholder="Type something here to search.." className="form-control"/>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;