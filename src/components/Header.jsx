import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
// import {queryString} from 'querystring'

// const a = { display:'flex'}
// const padd = {  }
class Header extends Component {
  submitHandler = (eventeyyy) => {
    eventeyyy.preventDefault();
    console.log("this is ", this);
    console.log("search la kuduthathu", this.refs.govaalu.value);
    this.props.history.push(
      "/movies?s=" + this.refs.govaalu.value.trim().split(" ").join("+")
    );
  };

  render() {
    return (
      <div className="alert alert-danger">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h2>
                <div className="text-center">
                  <b>
                    <Link
                      to="/"
                      style={{ textDecoration: "none" }}
                      title="Home"
                    >
                      🎬 Movie Browser
                    </Link>
                  </b>
                </div>
              </h2>
            </div>
            <div className="col-md-6">
              <form onSubmit={this.submitHandler}>
                <input
                  type="search"
                  ref="govaalu"
                  placeholder="Type a Movie name here to search.."
                  className="form-control"
                />
              </form>
            </div>
            <div className="col-md-2 text-center  ">
              {/* <button type="submit">Search</button> */}
              <Link
                to="/favorites"
                style={{
                  textDecoration: "none",
                  fontFamily: "consolas",
                }}
              >
                <h3 className="btn btn-primary ">Favourites 💚</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
