import './App.css';
import Dashboard from './components/dashboard';
import Food from './components/food';
import Students from './components/students';
import Nav from './components/loginnavbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
        <Route path="/admin/home" exact component={Dashboard} />
        <Route path="/admin/meals" exact component={Food} />
        <Route path="/admin/students" exact component={Students} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
