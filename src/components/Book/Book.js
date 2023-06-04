import "./Book.css";

import { Link } from "react-router-dom";

export default function Book({ title, description, status, deleteBook, id }) {
  return (
    <div className="book-container">
      <h1 className="book-title">
        <Link to={`/book/${id}`}>{title}</Link>
      </h1>
      <p className="book-description">{description}</p>
      <p className="book-status">{status}</p>
      <button onClick={() => deleteBook(id)}>Delete Book</button>
    </div>
  );
}
