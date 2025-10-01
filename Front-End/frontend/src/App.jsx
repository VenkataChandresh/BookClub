import { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [view, setView] = useState("welcome");
  const [books, setBooks] = useState([]);

  async function homePage() {
    const res = await fetch("http://localhost:3000");
    const mainPage = await res.json();
    console.log("Click button is working ra zoooooka");
    setView("welcome");
    return mainPage;
  }
  async function fetchBooks() {
    const res = await fetch("http://localhost:3000/books");
    const data = await res.json();
    setBooks(data);
    setView("books");
  }

  function handleBookAdded(book) {
    setBooks((prevBooks) => [...prevBooks, book]);
    setView("books");
  }

  async function handleDeleteBook(id) {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    });

    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }

  return (
    <>
      <Navbar
        intro={homePage}
        view={view}
        fetchBooks={fetchBooks}
        setAddView={() => setView("add")}
      />
      <Body
        view={view}
        books={books}
        onBookAdded={handleBookAdded}
        onClickDelete={handleDeleteBook}
      />
    </>
  );
}

export default App;
