import React, { Component } from "react";
import Moviecard from "./Moviecard";
import Axios from "axios";
import queryString from "query-string";

class Movielist extends Component {
  state = { movies: [] };

  componentDidMount() {
    this.fetchmovies();
    console.log(this.props);
  }

  componentDidUpdate(palasu) {
    if (this.props.location !== palasu.location) {
      this.fetchmovies();
      this.forceUpdate();
    }
  }

  fetchmovies = () => {
    // let search="HOME ALONE"
    let queryy = queryString.parse(this.props.location.search);
    Axios.get(`http://www.omdbapi.com/?s=${queryy.s}&apikey=7e383409`)
      .then((came) => came.data)
      .then((datam) => datam.Search)
      .then((arraycame) => this.setState({ movies: arraycame }))
      .then(console.log);
  };

  render() {
    let { movies } = this.state;
    // this.fetchmovies();
    // if(movies==[]){
    //     <h3>No Movies found</h3>
    // }
    // this.state.movies ? console.log("Present"):console.log("Absent");
    let output = (
      <div className="text-center">
        <img src="/blank.gif" alt="Loading..." width="95px" />
      </div>
    );
    if (movies && Object.keys(movies).length > 0) {
      if (this.state.movies !== undefined) {
        const Movielist = this.state.movies.map((m, index) => (
          <Moviecard movie={m} key={index} />
        ));
        output = <div className="row">{Movielist}</div>;
      } else {
        return (output = (
          <h3 className="text-center">
            flobbergaast!!🤯...Nothing Found vroo😒...Olunga search pannunga!!🤷‍♂️
          </h3>
        ));
      }
    }
    return output;
  }
}

export default Movielist;
