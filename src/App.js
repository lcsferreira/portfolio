import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HashRouter>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/trabalho' component={Home} />
          <Route path='/sobre' component={Home} />
          <Route path='/contato' component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
