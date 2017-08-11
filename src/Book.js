import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { bookAuthors, bookDescription, bookTitle, coverImage } = this.props

    return(
      <li>
        <figure className="book">
          {/* Front */}
          <ul className="hardcover_front">
            <li>
              <img src={ this.props.coverImage } alt="" width="100%" height="100%" />
            </li>
            <li />
          </ul>
          {/* Pages */}
          <ul className="page">
            <li />
            <li>
              <a className="btn" href="#">Download</a>
            </li>
            <li />
            <li />
            <li />
          </ul>
          {/* Back */}
          <ul className="hardcover_back">
            <li />
            <li />
          </ul>
          <ul className="book_spine">
            <li />
            <li />
          </ul>
          <figcaption>
            <h1>{this.props.bookTitle}</h1>
            <br />
            <p>Author(s):</p>
            <ul>
              {this.props.bookAuthors.map((author) => (
                <li
                  key={author}
                >
                  <p>{author}</p>
                </li>
              ))}
            </ul>
            <br />
            <p>{this.props.bookDescription.slice(0, 120)}...</p>
          </figcaption>
        </figure>
      </li>
    )
  }
}

export default Book
