import { Component } from "react";


class AddMovie extends Component {

    constructor() {
        super()
        this.state = {
            movieTitle: '',
            movieGenre: '',
            movieDirector: '',
            yearMade: '',
            moviePoster: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddMovieButton = () => {
        console.log(
            this.state.movieTitle,
            this.state.movieGenre,
            this.state.movieDirector,
            this.state.yearMade,
            this.state.moviePoster
        )
        fetch("http://localhost:8080/api/movies", {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.movieTitle,
                genre: this.state.movieGenre,
                director: this.state.movieDirector,
                year: this.state.yearMade,
                poster: this.state.moviePoster
            })
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    this.props.history.push('/browse-movies')
                }
            })
    }

    render() {
        return (
            <div>
                <h1>Add Movie</h1>
                <input type='text' name='movieTitle' onChange={this.handleChange} placeholder='Enter Title' />
                <input type='text' name='movieGenre' onChange={this.handleChange} placeholder='Genre' />
                <input type='text' name='movieDirector' onChange={this.handleChange} placeholder='Director' />
                <input type='text' name='yearMade' onChange={this.handleChange} placeholder='Year' />
                <input type='text' name='moviePoster' onChange={this.handleChange} placeholder='Poster URL' />
                <button onClick={this.handleAddMovieButton}>Add Movie</button>
            </div>
        )
    }
}

export default AddMovie