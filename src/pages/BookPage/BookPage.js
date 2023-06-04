import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function BookPage() {
  const [book, setBook] = useState({});
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: true,
  });

  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    try {
      const API = `http://localhost:8070/books?_id=${id}`;
      const res = await axios.get(API);
      setBook(res.data[0]);
      setForm({
        title: res.data[0].name,
        description: res.data[0].description,
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateBook(event) {
    event.preventDefault();
    const API = `http://localhost:8070/book/${id}`;
    await axios.put(API, form);
    getBook();
  }

  function handleForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  return (
    <div>
      <div>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
      </div>
      <div className="form-container">
        <form onSubmit={updateBook}>
          <input onChange={handleForm} name="title" placeholder="book title" />
          <input onChange={handleForm} name="description" placeholder="book description" />
        </form>
      </div>
    </div>
  );
}
