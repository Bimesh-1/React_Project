
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link>
        <h1>Zoo</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/insects">Insects</NavLink>
          </li>
          <li>
            <NavLink to="/fishes">Fishes</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;