import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/home-page';

function App() {
  return (
    <Router>
       <div className="app">
          <Switch>
              <Route path="/" component={() => <HomePage/>}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
