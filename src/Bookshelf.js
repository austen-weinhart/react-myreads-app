import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

class Bookshelf extends Component {
  state = { activeShelf: 'Search for Books' }

  handleItemClick = (e, { name }) => this.setState({ activeShelf: name })

  render() {
    const { activeShelf } = this.state
    const { books } = this.props

    const wantToReadContent = (
      <div className="container">
        <div className="component">
          <ul className="align">
            {books.filter((book) => (book.shelf === 'wantToRead')).map((book) => (
              <Book
                key={book.id}
                coverImage={book.imageLinks.thumbnail}
                bookTitle={book.title}
                bookDescription={book.description}
                bookAuthors={book.authors}
                shelf={book.shelf}
              />
            ))}
          </ul>
        </div>
      </div>
    )

    const currentlyReadingContent = (
      <div className="container">
        <div className="component">
          <ul className="align">
            {books.filter((book) => (book.shelf === 'currentlyReading')).map((book) => (
              <Book
                key={book.id}
                coverImage={book.imageLinks.thumbnail}
                bookTitle={book.title}
                bookDescription={book.description}
                bookAuthors={book.authors}
                shelf={book.shelf}
              />
            ))}
          </ul>
        </div>
      </div>
    )

    const finishedReadingContent = (
      <div className="container">
        <div className="component">
          <ul className="align">
            {books.filter((book) => (book.shelf === 'read')).map((book) => (
              <Book
                key={book.id}
                coverImage={book.imageLinks.thumbnail}
                bookTitle={book.title}
                bookDescription={book.description}
                bookAuthors={book.authors}
                shelf={book.shelf}
              />
            ))}
          </ul>
        </div>
      </div>
    )

    const allBooksContent = (
      <div className="container">
        <div className="component">
          <ul className="align">
            {books.map((book) => (
              <Book
                key={book.id}
                coverImage={book.imageLinks.thumbnail}
                bookTitle={book.title}
                bookDescription={book.description}
                bookAuthors={book.authors}
                shelf={book.shelf}
              />
            ))}
          </ul>
        </div>
      </div>
    )

    const nothingToReadContent = (
      <h2>No books selected</h2>
    )

    function BookshelfContent() {
      if (activeShelf === 'Search for Books') {
        return allBooksContent
      } else if (activeShelf === 'Want to Read') {
        return wantToReadContent
      } else if (activeShelf === 'Currently Reading') {
        return currentlyReadingContent
      } else if (activeShelf === 'Finished Reading') {
        return finishedReadingContent
      } else {
        return nothingToReadContent
      }
    }

    return(
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Want to Read' active={activeShelf === 'Want to Read'} onClick={this.handleItemClick} />
          <Menu.Item name='Currently Reading' active={activeShelf === 'Currently Reading'} onClick={this.handleItemClick} />
          <Menu.Item name='Finished Reading' active={activeShelf === 'Finished Reading'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='Search for Books' active={activeShelf === 'Search for Books'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <BookshelfContent />

        <p className="note">Please note that this only works in browsers that support CSS 3D Transforms. Also note that IE10 <strong>does not</strong> support <em>preserve-3d</em> which is needed for this application.</p>
      </div>
    )
  }
}

export default Bookshelf
