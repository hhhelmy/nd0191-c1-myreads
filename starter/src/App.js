import "./App.css";
import { useState, useEffect } from "react";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI"
import BookSearch from "./BookSearch";
import { Routes, Route} from "react-router-dom";

const App = () => {

  const [books, setBooks] = useState([]);
  
  useEffect(()=>{
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }

    getBooks();
  }, [])

  const changeBookShelf = (book, newShelf) =>{

    const updateShelf = async () =>{

     BooksAPI.update(book, newShelf);
      
      if(book.shelf === undefined){
       
        setBooks(books.concat(book));
      }
      
      const newBooks =  books.filter((currentBook) => currentBook.id === book.id ? currentBook.shelf = newShelf:currentBook );
      setBooks(newBooks);
    }
    updateShelf();
  }

 
  const shelves = [
    {id:"1", shelfName:"currentlyReading", shelfDisplayName:"Currently Reading"},
    {id:"2", shelfName:"wantToRead", shelfDisplayName:"Want to Read"},
    {id:"3", shelfName:"read", shelfDisplayName:"Read"},
    {id:"4", shelfName:"none", shelfDisplayName:"None"}]
  
  return (
    <div className="app">
        <div className="list-books">
          <div className="list-books-content">
            <Routes>
            <Route 
              path="/" 
              element={
                <ListBooks books={books} shelves={shelves} changeBookShelf={changeBookShelf} />
              } />
            
              <Route 
              path="/search" 
              element={
                <BookSearch books={books} shelves={shelves} changeShelf={changeBookShelf} />
              } />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
