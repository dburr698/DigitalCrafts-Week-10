import React, {Component} from 'react'
import BooksList from './components/BooksList'
import Menu from './components/Menu'

class App extends Component {

  constructor() {
    super()

    this.state = {
      allBooks: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      this.setState({
        allBooks: books
      })
    })
  }

  render() {
    return (
      <div>
        <Menu />
        <BooksList books={this.state.allBooks} />
      </div>
    )
  }
}
export default App;
