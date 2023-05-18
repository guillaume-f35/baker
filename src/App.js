import { ThemeProvider } from 'styled-components';
import './App.css';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Trends from './components/Trends';
import data from './baker.json';
import themeApp from './themeApp';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeApp}>
        <NavBar />
        <Posts data={data.barks}/>
        <Trends />
      </ThemeProvider>
    </div>
  );
}

export default App;
