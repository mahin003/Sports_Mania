import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import League from './components/League/League';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div className="App">
       <Header></Header>
      <Router>
        <Switch>
        <Route path="/:leagueId">
            <LeagueDetails></LeagueDetails>
          </Route>
        <Route path="">          
           <League></League>
         </Route>
       
        </Switch>
      </Router>

    </div>
  );
}

export default App;
