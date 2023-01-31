import logo from '../../../design/images/Logo.png';
import styles from "../../../design/Header.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <h1 className={styles.logo}>
                    <img width="200px" src={logo} className="App-logo" alt="logo" />
                </h1>
                <nav className={styles.navigation}> 
                    <ul>
                        <li>Store</li>
                        <li>Shop</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header