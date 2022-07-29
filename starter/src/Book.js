import PropTypes from "prop-types";


/* Pass props from Parent Component (App)  */
const Book = ({book, books, changeShelf}) => {
    return (
<div className="book">
                        <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                            `url(${book.imageLinks.smallThumbnail})`,
                            }}
                        ></div>
                        <div className="book-shelf-changer">
                            <select key={book.id} value={
                                books.find(e => e.id === book.id) ? books.find(e => e.id === book.id).shelf:"none"
                                } onChange={(e) => changeShelf(book, e.target.value)}>
                                <option value="" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
    )}


Book.propTypes={
    book: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
}

export default Book;                   