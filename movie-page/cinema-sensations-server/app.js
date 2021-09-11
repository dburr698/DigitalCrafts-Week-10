const express = require('express')
const app = express()

const cors = require('cors')

const bcrypt = require('bcryptjs')

const models = require('./models')

const salt = 10

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

app.post('/api/register', async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const persistedUser = await models.User.findOne({
        where: {
            username: username
        }
    })

    if(persistedUser == null) {
        bcrypt.hash(password, salt, async (error, hash) => {
            if(error){
                res.json({message: "Error occured when creating a user."})
            } else {
                const user = models.User.build({
                    username: username,
                    password: hash,
                    first_name: firstName,
                    last_name: lastName
                })

                let savedUser = await user.save()
                if(savedUser != null) {
                    res.json({success: true})
                }
            }
        })
    } else {
        res.json({message: "User already exists."})
    }
})

app.post('/api/login', async (req, res) => {
    
    const username = req.body.username
    const password = req.body.password

    let user = await models.User.findOne({
        where: {
            username: username
        }
    })

    if(user != null) {
        bcrypt.compare(password, user.password, (error, result) => {
            if(result) {
                res.json({success: true})
            } else {
                res.json({message: "Password Incorrect"})
            }
        })
    } else {
        res.json({message: "Username Incorrect"})
    }

})

app.listen(8080, () => {
    console.log('Server is running... you better go catch it')
})