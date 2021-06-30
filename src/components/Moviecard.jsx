import React from 'react';
const movie = {"Title":"The Hangover","Director":"Todd Phillips","Year":"2009","imdbID":"tt1119646","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
const ob={ width:'200px' }
const Moviecard = ( ) => {
    return (
        <div>
            <img src={movie.Poster} alt={movie.Title} className="card-img-top" style={ob} />
            <div className="card-body">
                <div className="card-title">{movie.Title}</div>
                <div className="card-text">{movie.Director}</div>
            </div>
            
        </div>
    );
}

export default Moviecard;