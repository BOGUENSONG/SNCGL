const Footer = () => {
  return (
    <footer>
      <nav className="navbar navbar-expand-lg bg-black text-light ">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/login"
                >
                  Instagram
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Facebook
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" href="/">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
