const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

const movies = [
    {title: 'Shang-Chi', genre: 'Action', director: 'Destin Daniel Crettin', year: 2021, posterURL:'https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'},
    {title: 'The Suicide Squade', genre: 'Action', director: 'James Gunn', year: 2021, posterURL: 'https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_.jpg'}
]

app.get('/api/movies', (req, res) => {
    res.json(movies)
})

app.post('/api/movies', (req, res) => {

    const title = req.body.title
    const genre = req.body.genre
    const director = req.body.director
    const year = req.body.year
    const poster = req.body.poster

    const movie = {title: title, genre: genre, director: director, year: year, posterURL: poster}

    movies.push(movie)
    res.json({success: true})

})


app.listen(8080, () => {
    console.log('Server is running... you better go catch it')
})