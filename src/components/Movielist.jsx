import React, { Component } from 'react'
import Moviecard from './Moviecard';

class Movielist extends Component {
    state = { movies: [{"Title":"Thor","Year":"2011","imdbID":"tt0800369","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},{"Title":"Thor: Ragnarok","Year":"2017","imdbID":"tt3501632","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"},{"Title":"Thor: The Dark World","Year":"2013","imdbID":"tt1981115","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"},{"Title":"Team Thor","Year":"2016","imdbID":"tt6016776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Thor: Tales of Asgard","Year":"2011","imdbID":"tt1667903","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg"},{"Title":"Team Thor: Part 2","Year":"2017","imdbID":"tt6599818","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODczODMwOTgtODhkOC00YjFiLWIzYmUtZTI3NThhZDE1NDhkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"},{"Title":"Almighty Thor","Year":"2011","imdbID":"tt1792794","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg"},{"Title":"Thor: Finding Korg","Year":"2018","imdbID":"tt8513006","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjI0ZmZlYzktZWNhMC00YjYwLThhZDItOGE4MTg1ZDM1YTMxXkEyXkFqcGdeQXVyNDM2MzU3Njc@._V1_SX300.jpg"},{"Title":"Thor: Hammer of the Gods","Year":"2009","imdbID":"tt1260572","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTFkMDA5ODEtMTQ1NC00NGRhLWE3ZGQtOGE5ZGJkMGI1ZDI5XkEyXkFqcGdeQXVyMjI1NjEzNjg@._V1_SX300.jpg"},{"Title":"Hetjur Valhallar - Þór","Year":"2011","imdbID":"tt1241721","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYxOTI1OTI0NF5BMl5BanBnXkFtZTgwMDQzMjcwMzE@._V1_SX300.jpg"}] }
    render() {

        const Movielist = this.state.movies.map(m=><Moviecard movie={m} key={m.imdbID}/>)
        return (
            <div className="row">
                { Movielist }
            </div>
        );
    }
}

export default Movielist;