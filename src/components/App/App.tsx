import './App.css';
import { Validation01 } from '../Validation01/Validation01';

function App() {
  const handleArrowClick = (event: object, foo: string): void => {
    console.log('handleArrowClick');
    console.log(event);
    console.log(foo);
  }
  const handleClick = (event: object): void => {
    console.log('handleClick');
    console.log(event);
  }
  return (
    <div className="App">
      <div className="container">
        <button onClick={(event) => handleArrowClick(event, 'foo')}>arrow function click</button>
      </div>
      <div className="container">
        <button onClick={handleClick}>arrow function click</button>
      </div>
      <div className="container">
        <Validation01 />
      </div>
    </div>
  );
}

export default App;
