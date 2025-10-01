import { useState } from "react";

function AddBookForm({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const newBook = { title, author, description };

    const res = await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });

    const savedBook = await res.json();
    onBookAdded(savedBook);

    setTitle("");
    setAuthor("");
    setDescription("");
  }

  return (
    <form className="mt-4 fade-in" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the Title of the book"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter the Author of the book"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Add Book
      </button>
    </form>
  );
}

export default AddBookForm;
