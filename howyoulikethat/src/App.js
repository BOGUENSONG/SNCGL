import logo from './design/images/Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} className="App-logo" alt="logo" /></h1>
        <div> 안녕하세요 테스트 중입니다. </div>
      </header>
    </div>

  );
}

export default App;
