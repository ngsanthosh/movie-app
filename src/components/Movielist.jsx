import React, { Component } from 'react';
import Moviecard from './Moviecard';
import Axios from 'axios';
import queryString from 'query-string'

class Movielist extends Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchmovies();
        console.log(this.props);
    }

    componentDidUpdate(palasu){
        if(this.props.location!==palasu.location){
            this.fetchmovies();
        }
    }

    fetchmovies=()=>{
        // let search="HOME ALONE"
        let queryy =queryString.parse(this.props.location.search)
        Axios.get(`http://www.omdbapi.com/?s=${queryy.s}&apikey=7e383409`)
        .then(came=>came.data)
        .then(datam=>datam.Search)
        .then(arraycame=>this.setState({movies:arraycame}))
        .then(console.log)
    }

    render() {
        // this.fetchmovies();
        const Movielist = this.state.movies.map((m,index) =><Moviecard movie={m} key={index}/>)
        return (
            <div className="row">
                { Movielist }
            </div>
        );
    }
}

export default Movielist;