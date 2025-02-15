import PropTypes from "prop-types";

/* Pass props from Parent Component (App)  */
const BookShelf = ({books, shelves, shelfTitle, changeShelf}) => {
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">

        <ol className="books-grid">
        
        {
           books.map((book) =>(

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
                    <select key={book.id} value={book.shelf} onChange={(e) => changeShelf(book, e.target.value)}>

                        {
                        shelves.map((shelf) =>(
                          <option value={shelf.shelfName}>
                            {shelf.shelfDisplayName}
                          </option>         
                            ))
                        }
                      
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
           )) 
        }
        </ol>


        </div>
      </div>
    
    )
};

BookShelf.propTypes={
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired,
}

export default BookShelf;