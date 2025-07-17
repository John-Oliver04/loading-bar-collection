import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <div className="App">
      <HomePage/>

      <LoadingPage/>
    </div>
  );
}

export default App;
