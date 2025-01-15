import logo from './assets/logo.svg';
import './style/App.css';

const user = {
  name: 'Doss',
  status: 'out'
};

function JuButton() {
  return (
    <button>I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>I'm {user.name}</p>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Welcome to my channel</h1>
        <AboutPage/>
        <JuButton/>
      </header>
    </div>
  );
}

export default App;
