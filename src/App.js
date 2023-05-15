import './App.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Trends from './components/Trends';
import data from './baker.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Posts data={data.barks}/>
      <Trends />
    </div>
  );
}

export default App;
