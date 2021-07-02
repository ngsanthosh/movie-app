import React, { Component } from 'react';

// const a = { display:'flex'}
// const padd = {  }
class Header extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <h2><b>Movie Browser</b></h2> 
                        </div>
                        <div className="col-md-6">
                            <input type="search" placeholder="Type something here to search.." className="form-control"/>
                        </div>
                        <div className="col-md-2">
                            <h4>Favourites</h4> 
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;