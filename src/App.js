import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home';
import Experiencia from './pages/Experiencia';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/experiencia' exact component={Experiencia} />
          <Route path='/sobre' exact component={Sobre} />
          <Route path='/contato' component={Contato} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
