import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import Trabalhos from './pages/Trabalhos';
import Sobre from './pages/Sobre';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/trabalhos' exact component={Trabalhos} />
          <Route path='/sobre' exact component={Sobre} />
          <Route path='/contato' component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
