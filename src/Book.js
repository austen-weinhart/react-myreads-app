import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { bookAuthors, bookDescription, bookTitle, coverImage, shelf } = this.props

    return(
      <li>
        <figure className="book">
          {/* Front */}
          <ul className="hardcover_front">
            <li>
              <img src={coverImage} alt="" width="100%" height="100%" />
            </li>
            <li />
          </ul>
          {/* Pages */}
          <ul className="page">
            <li />
            <li>
              <button>Want to Read</button>
              <button>Currently Reading</button>
              <button>Finished Reading</button>
              <button>Remove Book</button>
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
            <h1>{bookTitle}</h1>
            <br />
            <p>Author(s):</p>
            <ul>
              {bookAuthors.map((author) => (
                <li
                  key={author}
                >
                  <p>{author}</p>
                </li>
              ))}
            </ul>
            <br />
            <p>{bookDescription.slice(0, 120)}...</p>
          </figcaption>
        </figure>
      </li>
    )
  }
}

export default Book
