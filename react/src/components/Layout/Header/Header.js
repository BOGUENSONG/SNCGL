import logo from '../../../design/images/Logo.png';
import styles from "../../../design/Header.css"
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (
        <header className={styles.header}>
    <nav className="navbar navbar-expand-lg bg-black text-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="!#"><img width="200px" src={logo} className="App-logo" alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="!#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="!#">Link</a>
            </li>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="!#">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
        </header>
    )
}

export default Header