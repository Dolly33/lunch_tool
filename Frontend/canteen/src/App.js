import './App.css';
import Dashboard from './components/dashboard';
import Food from './components/food';
import Students from './components/students';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/loginpage';
import Studenthome from './components/studenthome';

function App() {
  return (
    <Router>
    <div className="App">
        
        <Switch>
        <Route path="/students" exact component={Studenthome} />
        <Route path="/admin" exact component={Login} />
        <Route path="/admin/dashboard" exact component={Dashboard} />
        <Route path="/admin/meals" exact component={Food} />
        <Route path="/admin/students" exact component={Students} />
        </Switch>
        
    </div>
    </Router>
  );
}

export default App;
