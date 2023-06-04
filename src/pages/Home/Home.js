import "./Home.css";

import Book from "../../components/Book/Book";

export default function Home({ books, form, handleChange, postBook, deleteBook }) {
  return (
    <main>
      <div className="main-home-container container">
        <h2 className="main-title">Create a Book</h2>
        <form onSubmit={postBook}>
          <input onChange={handleChange} type="text" name="title" placeholder="book title" value={form.title} />
          <input
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="book description"
            value={form.description}
          />
          <input onClick={postBook} type="submit" />
        </form>
        {books.map((book) => {
          return (
            <Book
              key={book._id}
              title={book.title}
              description={book.description}
              status={book.status}
              id={book._id}
              deleteBook={deleteBook}
            />
          );
        })}
      </div>
    </main>
  );
}
