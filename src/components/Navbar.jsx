function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navItems">
          <div className="logo">
            <img src="/images/swarmlmwhite.png" alt="logo.png" />
          </div>
          <li className="navLink">
            <a href="/">Home</a>
          </li>
          <li className="navLink">
            <a href="table">Create KEY</a>
          </li>
          <li className="navLink">
            <a href="chat">Playground</a>
          </li>
        </div>

        <button className="nodeBtn">Become A Node Provider</button>
      </div>
    </nav>
  );
}

export default Navbar;
