import logo from '../assets/photo.png';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { <img src={logo} className="App-logo" alt="logo" />}
       <h1 className="principal"> Anthony Clement</h1>
      </header>
    </div>
  );
}

export default App;
