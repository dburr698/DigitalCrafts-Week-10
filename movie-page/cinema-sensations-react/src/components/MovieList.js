import { Component } from "react";
import '../styles/MovieList.css'


class MovieList extends Component {
    
    render() {

        const movieItems = this.props.allMovies.map((movie, index) => {
            return <li className="movieLI" key={index}>
                <img className="poster" src={movie.posterURL} alt="Poster"/>
                <h3>{movie.title} - {movie.year}</h3>
                <p>{movie.director}</p>
            </li>
        })

        return(
            <ul className="movieUL">
                {movieItems}
            </ul>
        )
    }
}

export default MovieList