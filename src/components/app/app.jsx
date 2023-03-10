import './App.css'
import City from '../../components/city/city';
import SearchPanel from '../search-panel/search-panel';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState("Москва");
  
  return (
    <>
      <SearchPanel classList={"app__search-panel"} setCity={setCity}/>
      <City city={city}/>
    </>
  );
}

export default App
