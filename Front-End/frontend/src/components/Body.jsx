import AddBookForm from "./AddBookForm";
function Body({ view, books, onBookAdded, onClickDelete }) {
  return (
    <>
      <p>Current view: {view}</p>
      <div className="container mt-4">
        {/* showing the main welcome text to the user */}
        {view === "welcome" && (
          <h4 className="fade-in">Welcome to the Book Club!</h4>
        )}

        {/* Showing the books when user clicks get book */}
        {view === "books" && (
          <>
            <h4 className="fade-in mb-4">Books List</h4>
            <ul className="list-group list-group-flush mt-3 fade-in">
              {books.map((book) => (
                <li
                  key={book.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {book.title} — <em>{book.author}</em>
                  </span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onClickDelete(book.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
        {/* Showing the form to the user when they choose to add books */}
        {view === "add" && (
          <>
            <h4 className="fade-in">Add a New Book</h4>
            <AddBookForm onBookAdded={onBookAdded} />
          </>
        )}
      </div>
    </>
  );
}

export default Body;
