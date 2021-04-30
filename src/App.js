import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Oxygen from './pages/Oxygen';
import Plasma from './pages/Plasma';
import Medicine from "./pages/Medicine";
import Beds from "./pages/Beds";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path='/beds' exact component={Beds} />
        <Route path='/oxygen' exact component={Oxygen} />
        <Route path='/plasma' exact component={Plasma } />
        <Route path='/medicine' exact component={Medicine} />  
     </Switch>
    </Router>
  );
}

export default App;
