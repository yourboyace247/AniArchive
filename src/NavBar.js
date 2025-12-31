import { Link } from 'react-router-dom';

export default function NavBar({ children, userList  }) {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/">Browse</Link>
        <Link to="/mylist">My List ({userList.length})</Link>
      </div>
      {children}
    </nav>
  );
}