const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <a className="navbar-brand text-xl" href="#">
        Thrive
      </a>
      <ul className="flex gap-4 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">
            Signup
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
