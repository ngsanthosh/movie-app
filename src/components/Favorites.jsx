import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Favcard from "./Favcard";
// import Axios from 'axios';
import Moviecard from './Moviecard';

class Favorites extends React.Component {
    
  render() {
    //   const jerry = <div>FAVORITES</div>
      // const common = <h2 className="text-center">Favourites<hr/></h2>
      if(this.props.state === undefined || this.props.state.length === 0 ){
          return <div><h1 className="text-center bord" >Favourites<hr/></h1><p></p><h5 className="text-center" style={{fontFamily:"consolas"}}>No Movies to display</h5></div> 
      }
      
    console.log("favourites:",this.props.state);
    // const { favs } = this.props.fav;
    const {hello}= this.props.state
    // console.log(this.props)
    // console.log(favs);
    console.log(hello);
    const Movielist = this.props.state.map((m, index) => (
        <Favcard movie={m} key={index} />
      ));
    const output = <div className="row"><h1 className="text-center">Favourites<hr/></h1><p></p>{Movielist}</div>;
    return output
    
    // favorites.map((m, index) =>
    // <Moviecard movie={m} key={index} />
    // )
    // // <div className="text-center">
    // //     props is {props.location.search} <p></p>
    // //     {/* imdb={props.location.search}.trim().split('?i=').join(' ') */}
    // //     <div>
    // //         {imdb}
    // //     </div>
    // //     Hello! This page is still in developement. Check back later. TY.
    // //     <br />
    // //     {/* I got {props} */}

    // // </div>
  }
}
// const [favorites, setfavorites] = useState([{"Title":"Thor: Ragnarok","Year":"2017","Rated":"PG-13","Released":"03 Nov 2017","Runtime":"130 min","Genre":"Action, Adventure, Comedy","Director":"Taika Waititi","Writer":"Eric Pearson, Craig Kyle, Christopher L. Yost","Actors":"Chris Hemsworth, Tom Hiddleston, Cate Blanchett","Plot":"Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnar??k, the destruction of his world, at the hands of the powerful and ruthless villain Hela.","Language":"English","Country":"United States, Australia","Awards":"6 wins & 50 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"7.9","imdbVotes":"618,573","imdbID":"tt3501632","Type":"movie","DVD":"17 Feb 2018","BoxOffice":"$315,058,289","Production":"Marvel Studios","Website":"N/A","Response":"True"}]);
// // console.log(props)
// let imdb;
// let samp={"Title":"Thor: Ragnarok","Year":"2017","Rated":"PG-13","Released":"03 Nov 2017","Runtime":"130 min","Genre":"Action, Adventure, Comedy","Director":"Taika Waititi","Writer":"Eric Pearson, Craig Kyle, Christopher L. Yost","Actors":"Chris Hemsworth, Tom Hiddleston, Cate Blanchett","Plot":"Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnar??k, the destruction of his world, at the hands of the powerful and ruthless villain Hela.","Language":"English","Country":"United States, Australia","Awards":"6 wins & 50 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"7.9","imdbVotes":"618,573","imdbID":"tt3501632","Type":"movie","DVD":"17 Feb 2018","BoxOffice":"$315,058,289","Production":"Marvel Studios","Website":"N/A","Response":"True"}
// let moviepass
// imdb=props.location.search.trim().split('?i=').join(' ')

// // const getMovieRequest = async (searchValue) => {
// // 	const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

// // 	const response = await fetch(url);
// // 	// console.log(response)
// // 	const responseJson = await response.json();
// // 	if(responseJson.Search){
// // 		const arr = responseJson.Search.map(movie=>{
// // 			movie["isFavourite"] = false;
// // 			return movie;
// // 		})
// // 		setMovies(arr);
// // 	}
// // };

// // useEffect(() => {
// // 	getMovieRequest(searchValue);
// // }, [searchValue]);
// // console.log(favourites)
// // useEffect(() => {
// // 	const movieFavourites = JSON.parse(
// // 		// localStorage.getItem('react-movie-app-favourites'),
// // 		window.sessionStorage.getItem("react-movie-app-favourites")
// // 	);
// // 	// real=movieFavourites[1].isFavourite
// // 	// console.log("real value is ", real)
// // 	console.log(movieFavourites)
// // 	if (movieFavourites) {
// // 		const newMovieFavourites = _.uniq(movieFavourites)
// // 		setFavourites(newMovieFavourites);
// // 	}
// // }, []);

// Axios.get(`http://www.omdbapi.com/?i=${imdb}&apikey=7e383409`)
//     // .then((came) => came.data)
//     .then((came)=>console.log(came.data))
//     .then(thestuff=>setfavorites(thestuff))
//     //  moviepass=(came.data))
//     // .then((moviess)=>console.log(moviess.data))
//     // .then((datam) => datam.Search)
//     // .then((movie) => moviepass=movie)
//     // .then("console from favorites",console.log);

//     console.log(favorites)

const mapStatetoprops = (state) => {
  return {
    state,
  };
};

export default connect(mapStatetoprops)(Favorites);
