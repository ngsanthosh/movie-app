import React from "react";
import { withRouter } from "react-router";
import Favorites from "./Favorites";
import { Link, Route } from "react-router-dom";
import { classImplements } from "@babel/types";
import { addmovietofav } from "../Redux/actions";
import { connect } from "react-redux";
// const movie = {"Title":"The Hangover","Director":"Todd Phillips","Year":"2009","imdbID":"tt1119646","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
// const ob={ width:'400px' }
// const imgg ={ float: 'left',
//     width:  '100px',
//     height: '100px'}

class Moviecard extends React.Component {
  render() {
    let isclicked = "false";
    const props = this.props;
    console.log("From moviecard:", props);
    const clickpannitaan = (imdb) => {
      console.log("Imdb ithaan da", imdb);
      props.history.push("/details?i=" + imdb);
    };

    let { movie } = props;
    // if(movie==[])
    // {
    //     <h4>No Movies Found</h4>
    // }
    // console.log(movie);
    // let showfav=false
    // const callme=(movie)=>{
    //         // showfav=true
    //         // forceUpdate();
    //         console.log("The movie is" ,movie.Title);
    //         // <div>
    //         //     <Route path="/favorties" component={<Favorites movie={movie} />}></Route>
    //         // </div>
    //             props.history.push('/favorites?i='+movie.imdbID)
    //     // <div className="container">
    //     // </div>
    // }
    const callme = (mvoie) => {
      isclicked = true;

      alert("Movie successfully added to favorites!!");
      console.log(mvoie.Title);

      this.props.dispatch(addmovietofav(mvoie));
      // const isthere=this.props.state.indexOf(mvoie)
      // console.log(isthere)
    };
    // const {favs}= this.props.fav
    console.log("Favs array", this.props.state);
    if (this.props.state !== undefined) {
      let j1 = JSON.stringify(this.props.state)
      let j2 = JSON.stringify(movie)
      console.log("states",j1)
      console.log("movie",j2)
      const hello = j1.indexOf(j2);
      console.log("hello", hello);
    }
    return (
      <div className="col-md-3">
        <div></div>

        <div className="card bg-dark">
          <div onClick={() => clickpannitaan(movie.imdbID)}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="card-img-top"
              height="450px"
            />
            <div className="card-body text-center">
              <div className="card-title">{movie.Title}</div>
              <div className="card-text">{movie.Year}</div>
            </div>
          </div>
          {/* <Link to="/favorites" style={{color:"white", textDecoration:'none'}}><div className="card btn btn-primary" onClick={()=>callme(movie)}>Add to Favorites ????</div></Link> */}
          {isclicked ? (
            <div
              className="card btn btn-primary"
              onClick={() => callme(movie)}
              disabled
            >
              Add to Favorites ????
            </div>
          ) : (
            <div className="card btn btn-primary" onClick={() => callme(movie)}>
              Add to Favorites ????
            </div>
          )}
        </div>
        <p></p>
      </div>
    );
  }
}

const mapStatetoprops = (state) => {
  return {
    state,
  };
};

export default connect(mapStatetoprops)(withRouter(Moviecard));
