import {Link} from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI"
import PropTypes from "prop-types";

const BookSearch = ({books, changeShelf}) => {

    const [query, setQuery] = useState("");
    const [showingBooks, setShowingBooks] = useState([]);

    const updateQuery = (query)=>{

        setQuery(query);

       if( query !== ""){ 

        const getBooks = async () => {
            const res = await BooksAPI.search(query);
          
            setShowingBooks(res);
          }
      
          getBooks();
        }else{
            setShowingBooks([]);
        }
    };
    
   

    return (
        <div className="search-books">
        <div className="search-books-bar">
        {<Link className="close-search" to="/">
            Close
        </Link>}
            
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query} 
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          <ol className="books-grid">
        
        {
            showingBooks.length >0 &&(
                showingBooks.map((book) =>(

                    <li key={book.id}>
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
                    </li>
                ))
            ) 
        }
        </ol>
          </ol>
        </div>
      </div>
    
    )
};

BookSearch.propTypes={
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
} 

export default BookSearch;