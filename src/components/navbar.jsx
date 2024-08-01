const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <a
        className="navbar-brand text-lg sm:text-xl font-extrabold tracking-wider italic"
        href="/"
      >
        WorkWave
      </a>
      <ul className="flex gap-4 items-center text-sm sm:text-base ">
        <li className="nav-item hover:underline">
          <a className="nav-link" href="/preferences">
            Preferences
          </a>
        </li>
        <li className="nav-item hover:underline">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item hover:underline">
          <a className="nav-link" href="/signup">
            Signup
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
