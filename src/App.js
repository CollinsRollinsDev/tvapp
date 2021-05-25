import "./App.css";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import About from "./Components/About";
import Sermon from "./Components/Sermon";
import Event from "./Components/Event";
import PlaySmall from "./Components/PlaySmall";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/sermon" component={Sermon} />
        <Route path="/event" component={Event} />
        <Route path="/sermon" component={Sermon} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
