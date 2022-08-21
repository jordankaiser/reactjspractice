import './App.css';
import { ClickHandling } from '../ClickHandling/ClickHandling';
import { ObjectFunction } from '../ObjectFunction/ObjectFunction';

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

      {/* Click handling practice */}
      <div className="container">
        <ClickHandling />
      </div>
      
      {/* Function object param practice */}
      <div className="container">
        <ObjectFunction />
      </div>
    </div>
  );
}

export default App;
