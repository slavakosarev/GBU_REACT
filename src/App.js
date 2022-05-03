<<<<<<< HEAD
import logo from './logo.svg';
import './App.css'; // данное подключение глобально, изоляции компонента не будет. Лучше использовать модуль css
import { Button } from "./components";
import { Header } from "./components";
import { Message } from "./components";
=======
import './App.css';
import { Header } from './components';
import { Messenger } from './components';
>>>>>>> homework#4

function App() {
  return (
    <div className="App">
      <Header title="Single Page Application"></Header>
<<<<<<< HEAD
      <img src={logo} className="App-logo" alt="logo" />
      <Button
        onClick={() => {
          const logo = document.querySelector("img");
          return logo.style.animation = "App-logo-spin infinite 1s linear"
        }}></Button>
      <Message>{"Hello World!"}</Message>
      {/* <header className="App-header">
        
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
      </header> */}
=======
      <Messenger />
>>>>>>> homework#4
    </div >
  );
}

export default App;
