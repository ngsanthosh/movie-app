import React from 'react';
import { withRouter } from 'react-router';
// const movie = {"Title":"The Hangover","Director":"Todd Phillips","Year":"2009","imdbID":"tt1119646","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
// const ob={ width:'400px' }
// const imgg ={ float: 'left',
//     width:  '100px',
//     height: '100px'}
const Moviecard = (props) => {
    const clickpannitaan=(imdb)=>{
        console.log('Imdb ithaan da',imdb);
        props.history.push('/details?i='+imdb)
    }

    let {movie} = props
    // if(movie==[])
    // {
    //     <h4>No Movies Found</h4>
    // }
    // console.log(movie);
    return  <div className="col-md-3">
        <div>

        </div>
                <div className="card bg-dark">
                 
                    <div onClick={()=>clickpannitaan(movie.imdbID)}>
                    <img src={movie.Poster} alt={movie.Title} className="card-img-top"/>
                    <div className="card-body text-center">
                        <div className="card-title">{movie.Title}</div>
                        <div className="card-text">{movie.Year}</div>
                    </div>
                    </div>
                    <div className="btn btn-primary">Add to Favorites 💘</div>
                </div>
            </div>
            
    
}

export default withRouter(Moviecard);