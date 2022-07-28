import "./App.css";
import { useState, useEffect } from "react";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI"
import BookSearch from "./BookSearch";
import { Routes, Route} from "react-router-dom";

const App = () => {

  const changeBookShelf = (book, newShelf) =>{
    
    const updateShelf = async () =>{
      
      BooksAPI.update(book, newShelf);
      
      const newBooks =  books.filter((currentBook) => currentBook.id === book.id ? currentBook.shelf = newShelf:currentBook );
    
      setBooks(newBooks);
     
    }
    updateShelf();
  }

  const [books, setBooks] = useState([]);
  
  useEffect(()=>{
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }

    getBooks();
  }, [])

  
  return (
    <div className="app">
        <div className="list-books">
          <div className="list-books-content">
            <Routes>
            <Route 
              path="/" 
              element={
                <ListBooks books={books} changeBookShelf={changeBookShelf} />
              } />
            
              <Route 
              path="/search" 
              element={
                <BookSearch books={books} changeShelf={changeBookShelf} />
              } />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
