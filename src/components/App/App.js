import './App.css';

function App() {
  const handleArrowClick = (event, foo) => {
    console.log('handleArrowClick');
    console.log(event);
    console.log(foo);
  }
  const handleClick = (event) => {
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
    </div>
  );
}

export default App;
