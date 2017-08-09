import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class WantToRead extends Component {
  render() {
    const { books } = this.props

    let showingBooks = books

    return(
      <div>
        <h1>Hello World!</h1>
          <ol className='book-list'>
            {showingBooks.map((book) => (
              <li key={book.bookId} className='book-list-item'>
                {book.title}
              </li>
            ))}
          </ol>
      </div>
    )
  }
}

export default WantToRead
