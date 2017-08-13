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

    let showingBooks

    if (activeShelf === 'Want to Read') {
      showingBooks = books.filter((book) => (book.shelf === 'wantToRead'))
    } else if (activeShelf === 'Currently Reading') {
      showingBooks = books.filter((book) => (book.shelf === 'currentlyReading'))
    } else if (activeShelf === 'Finished Reading') {
      showingBooks = books.filter((book) => (book.shelf === 'read'))
    } else {
      showingBooks = books
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

        <div className="container">
          <div className="component">
            <ul className="align">
              {showingBooks.map((book) => (
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

        <p className="note">Please note that this only works in browsers that support CSS 3D Transforms. Also note that IE10 <strong>does not</strong> support <em>preserve-3d</em> which is needed for this application.</p>
      </div>
    )
  }
}

export default Bookshelf
