import React, { Component } from 'react';
import Axios from "axios";
import queryString from "query-string";

class Moviedetail extends Component {
    state = { movie:{} }

    componentDidMount() {
        this.fetchmovies();
        // console.log(this.props);
      }
    
      componentDidUpdate(palasu) {
        if (this.props.location !== palasu.location) {
          this.fetchmovies();
        }
      }
    
      fetchmovies = () => {
        // let search="HOME ALONE"
        let queryy = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?i=${queryy.i}&apikey=7e383409`)
          .then((came) => came.data)
        //   .then((datam) => datam.Search)
          .then((moviecame) => this.setState({ movie: moviecame }))
        //   .then(console.log);
      }; 
    

      render() {
          let movie = this.state.movie

          let dothis = <div className="text-center">
              <img src="/blank.gif" alt="Loading..." width="95px"/>
          </div>;

          if(movie && Object.keys(movie).length>0){
     
                
                 // <div>{movie.Poster}</div>
                  // <div>Helloooooo</div>
                //   <div className="container">
                console.log("This is working..");
                dothis =
                 <div className="row">
                     <div className="col-md-4">
                         <div className="text-center">
                            <img src={movie.Poster} alt="" className="img img-thumbnail"  /><p></p>
                         </div>
                     </div>
                     <div className="col md-8">
                        <h3> <strong>{movie.Title}</strong></h3> <p/>
                         <table className="table">
                             <tbody>
                                 
                                 <tr>
                                     <td>Director</td>
                                     <td>{movie.Director}</td>
                                 </tr>
                                 <tr>
                                     <td>Plot</td>
                                     <td>{movie.Plot}</td>
                                 </tr>
                                 <tr>
                                     <td>Actors</td>
                                     <td>{movie.Actors}</td>
                                 </tr>
                                 <tr>
                                     <td>Type</td>
                                     <td>{movie.Type}</td>
                                 </tr>
                                 <tr>
                                     <td>Genre</td>
                                     <td>{movie.Genre}</td>
                                 </tr>
                                 <tr>
                                     <td>Country</td>
                                     <td>{movie.Country}</td>
                                 </tr>
                                 <tr>
                                     <td>Writer</td>
                                     <td>{movie.Writer}</td>
                                 </tr>
                                 <tr>
                                     <td>Language</td>
                                     <td>{movie.Language}</td>
                                 </tr>
                                 <tr>
                                     <td>Imdb Rating</td>
                                     <td>{movie.imdbRating}</td>
                                 </tr>
                                 <tr>
                                     <td>Released</td>
                                     <td>{movie.Released}</td>
                                 </tr>
                                 <tr>
                                     <td>Runtime</td>
                                     <td>{movie.Runtime}</td>
                                 </tr>
                                
                                 
                             </tbody>
                         </table>
                         <button className="btn btn-secondary" onClick={()=>this.props.history.goBack()}>
                             Back
                        </button>
                     </div>
                 </div>
                //   {/* </div> */}
          }
          return dothis;
    
    }
}

export default Moviedetail;