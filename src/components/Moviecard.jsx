import React from 'react';
// const movie = {"Title":"The Hangover","Director":"Todd Phillips","Year":"2009","imdbID":"tt1119646","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
const ob={ width:'400px' }
const Moviecard = (props) => {
    let {movie} = props
    return  <div className="col-md-3">
                <div className="card bg-dark">

                    <img src={movie.Poster} alt={movie.Title} className="card-img-top"/>
                    <div className="card-body text-center">
                        <div className="card-title">{movie.Title}</div>
                        <div className="card-text">{movie.Director}</div>
                    </div>
                </div>
            </div>
            
    
}

export default Moviecard;