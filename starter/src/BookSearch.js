import {Link} from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI"
import PropTypes from "prop-types";
import Book from "./Book";

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
                     <Book book={book} books={books} changeShelf={changeShelf}/>
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