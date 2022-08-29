
import './App.css';
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="searchResults/:searchItem" element={<SearchResult/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
