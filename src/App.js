import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><img src={logo} alt="logo" /> <strong>Top</strong>Visited</p>
        <p>
          You've visited this site: 
        </p>
        <hr style={{width: '200px'}}/>
      </header>
    </div>
  );
}

export default App;
