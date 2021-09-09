import { Component } from "react"
import MovieList from "./MovieList"


class BrowseMovies extends Component {

    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/movies")
        .then(response => response.json())
        .then(movies => {
            this.setState({
                movies: movies
            })
        })
    }

    render() {
        return(
            <div>
                <h1>Browse Movies</h1>
                <MovieList allMovies={this.state.movies} />
            </div>
        )
    }
}

export default BrowseMovies