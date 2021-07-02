import React, { Component } from 'react';
import Moviecard from './Moviecard';
import Axios from 'axios';

class Movielist extends Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchmovies();
    }

    fetchmovies=()=>{
        let search="HOME ALONE"
        Axios.get(`http://www.omdbapi.com/?s=${search}&apikey=7e383409`)
        .then(came=>came.data)
        .then(datam=>datam.Search)
        .then(arraycame=>this.setState({movies:arraycame}))
        .then(console.log)
    }

    render() {
        // this.fetchmovies();
        const Movielist = this.state.movies.map(m=><Moviecard movie={m} key={m.imdbID}/>)
        return (
            <div className="row">
                { Movielist }
            </div>
        );
    }
}

export default Movielist;