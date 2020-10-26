import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './commponent/Home/Home';
import LoginSignup from './commponent/LoginSignup/LoginSignup';
function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/logins-signup">
           <LoginSignup />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
