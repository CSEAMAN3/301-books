import "./Reset.css";
import "./App.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import BookPage from "./pages/BookPage/BookPage";

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: true,
  });

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = "http://localhost:8070/books";
    const res = await axios.get(API);
    setBooks(res.data);
  }

  async function deleteBook(id) {
    try {
      const API = `http://localhost:8070/books/${id}`;
      console.log(API);
      await axios.delete(API);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  }

  async function postBook(event) {
    event.preventDefault();
    const API = `http://localhost:8070/books`;
    await axios.post(API, form);
    getBooks();
    setForm({
      title: "",
      description: "",
      status: true,
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home books={books} form={form} handleChange={handleChange} deleteBook={deleteBook} postBook={postBook} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
