import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const num = useSelector(state => state.num.num);
  return (
    <div className="App">
      <p>{num}</p>
        <button type="button" onClick={() => {dispatch({type: 'default/increment', payload: 1})}}>+</button>
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
      </header>
    </div>
  );
}

export default App;
