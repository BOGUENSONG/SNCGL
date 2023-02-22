import logo from "../../../design/images/Logo.png";
import styles from "../../../design/Header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg bg-black text-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img width="200px" src={logo} className="App-logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="w-50 position-relative "
            style={{ height: "38px" }}
            role="search"
          >
            <input
              className="form-control position-absolute"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="black"
              className="bi bi-search-heart position-absolute top-0 end-0 m-1"
              style={{ cursor: "pointer" }}
              viewBox="0 0 16 16"
            >
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
              <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
            </svg>
          </div>

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
                  로그인
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" href="/">
                  Disabled
                </a>
              </li>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  마이페이지
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/register">내 정보</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">설정</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">로그아웃</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
