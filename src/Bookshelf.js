import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

class Bookshelf extends Component {
  render() {
    const { books } = this.props
    let showingBooks = books

    return(
      <div>
        <div className="container">
          <div className="component">
            <ul className="align">
              {showingBooks.map((book) => (
                <Book
                  key={book.id}
                  coverImage={ book.imageLinks.thumbnail }
                  bookTitle={book.title}
                  bookDescription={book.description}
                  bookAuthors={book.authors}
                />
              ))}
            </ul>
            <p className="note">Please note that this only works in browsers that support CSS 3D Transforms. Also note that IE10 <strong>does not</strong> support <em>preserve-3d</em> which is needed for this demo.</p>
          </div>
        </div>{/* /container */}
      </div>
    )
  }
}

export default Bookshelf
