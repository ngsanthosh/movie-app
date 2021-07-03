import React, { Component } from "react";
import {withRouter, Link} from "react-router-dom"
import {queryString} from 'querystring'

// const a = { display:'flex'}
// const padd = {  }
class Header extends Component {

  submitHandler = (eventeyyy) => {
      eventeyyy.preventDefault();
      console.log("this is ", this);
      console.log("this is ", this.refs.govaalu.value);
      this.props.history.push("/movies/?s="+this.refs.govaalu.value.split(' ').join('+'))
  }

  render() {
    return (
      <div className="alert alert-danger">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h2>
               <b> <Link to="/" style={{textDecoration:'none'}} title="Home">Movie Browser</Link></b>
              </h2>
            </div>
            <div className="col-md-7">
              <form onSubmit={this.submitHandler}>
                <input type="search"
                    ref="govaalu"
                  placeholder="Type something here to search.."
                  className="form-control" />
              </form>
            </div>
            {/* <div className="col-md-1">
              {/* <button type="submit">Search</button> */}
              {/* <h4>Favourites</h4>
            </div> */} 
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
