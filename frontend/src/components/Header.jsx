import { FaRegUser } from 'react-icons/fa';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FiLogIn /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaRegUser /> Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
