import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Trailer from './Components/Trailer/Trailer'
import Home from './Components/Home/Home'

function App() {

  return (
    <div className='App'>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Trailer" component={Trailer} />
      </Router>
    </div>
  );
}

export default App;
