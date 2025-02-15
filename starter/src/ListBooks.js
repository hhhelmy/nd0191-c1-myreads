import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";

const ListBooks = ({books, shelves, changeBookShelf}) => {

  const currentlyReadingBooks = books.filter((c) => c.shelf === "currentlyReading")
  const wantToReadBooks = books.filter((c) => c.shelf === "wantToRead")
  const readBooks = books.filter((c) => c.shelf === "read")

    return (
        
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BookShelf books={currentlyReadingBooks} shelves={shelves} shelfTitle={"Currently Reading"} changeShelf={changeBookShelf} />
            <BookShelf books={wantToReadBooks} shelves={shelves} shelfTitle={"Want to Read"} changeShelf={changeBookShelf} />
            <BookShelf books={readBooks} shelves={shelves} shelfTitle={"Read"} changeShelf={changeBookShelf} />
            <div className="open-search">
                <Link to="/search">
                        Add a book
                </Link>
            </div>
        </div>
    );
};



ListBooks.propTypes={
books: PropTypes.array.isRequired,
shelves: PropTypes.array.isRequired,
changeBookShelf: PropTypes.func.isRequired,
}

export default ListBooks;          