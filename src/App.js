import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/Searchbar';
import {searchPokemon} from './api.js';


function App() {
  const onSearchHandler = (pokemon) =>{
    console.log("Pokemon: ", pokemon)
  }
  return (
    <div>
      <Navbar />
      <Searchbar
       onSearch={onSearchHandler}
      />
      <div className="App">
      
      </div>
    </div>
  );
}

export default App;
