import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';
import Booking from './Booking';
import './form.scss'; // assuming a styles directory under src/
// import 'semantic-ui-css/semantic.min.css'
import Reservations from './Reservations';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App" id="main">
       <Router>
        <Switch>
          <Route path="/" exact component={() =><Calendar/>} />
          <Route path="/reservations" exact component={() => <Reservations />} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
