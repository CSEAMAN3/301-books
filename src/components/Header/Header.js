import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <h1 className="header-heading">The Book Hive</h1>
        <nav>
          <ul>
            <li>
              <Link className="header-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="header-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
