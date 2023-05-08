import './App.css';
import NavBar from './components/NavBar'
import Posts from './components/Posts';
import Trends from './components/Trends';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Posts />
      <Trends />
    </div>
  );
}

export default App;
