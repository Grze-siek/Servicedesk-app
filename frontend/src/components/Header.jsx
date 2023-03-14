import { FaRegUser } from 'react-icons/fa';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  function onLogout() {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FiLogOut /> Logout
            </button>
          </li>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
