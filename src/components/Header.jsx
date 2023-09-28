import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="black">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          People
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/planets">Planets</Link>
          </li>

          <li>
            <Link to="/species">Species</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
