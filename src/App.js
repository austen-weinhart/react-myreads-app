import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './utils/BooksAPI'


class App extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>MyReads</h1>
        <Bookshelf
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
