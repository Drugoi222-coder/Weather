import './App.css'
import { useState } from 'react';
import City from '../../components/city/city';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <City city={"Москва"}/>
      <City city={"Пенза"}/>
      <City city={"Саратов"}/>
      <div className="counter">
        <button onClick={() => setCounter((prev) => prev + 1)} className="counter__button counter__plus">+</button>
        <div className="counter__digit">
          {counter}
        </div>
        <button onClick={() => setCounter((prev) => prev - 1)} className="counter__button counter__minus">-</button>
      </div>
    </>
  );
}

export default App
