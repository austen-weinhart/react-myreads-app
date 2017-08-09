import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { CardGroup, Card, Icon, Image } from 'semantic-ui-react'

class Bookshelf extends Component {
  render() {
    const { books } = this.props

    let showingBooks = books

    return(
      <CardGroup>
        {showingBooks.map((book) => (
          <Card key={book.id}>
            <Image src={book.imageLinks.thumbnail} />
            <Card.Content>
              <Card.Header>
                Matthew
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2015
                </span>
              </Card.Meta>
              <Card.Description>
                {book.title}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
                {book.authors.map((author) => (
                  <span key={author} className="subtitle is-6">{author}</span>
                ))}
              </a>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    )
  }
}

export default Bookshelf
