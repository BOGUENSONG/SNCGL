import logo from '../../../design/images/Logo.png';
import styles from "../../../design/Header.css"
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (
        <header className={styles.header}>
    <nav className="navbar navbar-expand-lg bg-black text-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img width="200px" src={logo} className="App-logo" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex" role="search">
            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button>
          </form>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/login">로그인</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="/">Disabled</a>
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
    )
}

export default Header