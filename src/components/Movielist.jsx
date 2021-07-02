import React, { Component } from 'react'
import Moviecard from './Moviecard';

class Movielist extends Component {
    state = { movies: [{"Title":"The Hangover","Year":"2009","imdbID":"tt1119646","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"The Hangover Part II","Year":"2011","imdbID":"tt1411697","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_SX300.jpg"},{"Title":"The Hangover Part III","Year":"2013","imdbID":"tt1951261","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTA0NjE1MzMzODheQTJeQWpwZ15BbWU3MDY4MTQ3Mzk@._V1_SX300.jpg"},{"Title":"The Big Hangover","Year":"1950","imdbID":"tt0042247","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDM0ZjQyM2MtMDk4Ni00YzdlLWFiNmUtNWQzZGM3ZWEwYzRjXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg"},{"Title":"The Hangover","Year":"2011","imdbID":"tt2055769","Type":"movie","Poster":"N/A"},{"Title":"The Unauthorized Documentary, Hangover Part II","Year":"2011","imdbID":"tt2124991","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDI4ZDM0ODQtN2JhOS00MmE1LTgxMzQtODkzYmE4YmE4ZDViXkEyXkFqcGdeQXVyMTE0ODEzNzQ@._V1_SX300.jpg"},{"Title":"A Shot at Love: The Hangover","Year":"2007–","imdbID":"tt1157296","Type":"series","Poster":"N/A"},{"Title":"Action: The Hangover Part II","Year":"2011","imdbID":"tt1942795","Type":"movie","Poster":"N/A"},{"Title":"The College Hangover","Year":"2013–","imdbID":"tt2897206","Type":"series","Poster":"N/A"},{"Title":"The Hangover","Year":"1991","imdbID":"tt1262901","Type":"movie","Poster":"N/A"}] }
    render() {
        const Movielist = this.state.movies.map(m=><Moviecard />)
        return (
            <div className="row">
                { Movielist }
            </div>
        );
    }
}

export default Movielist;