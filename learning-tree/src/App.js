import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Early from "./pages/Early";
import Inter from "./pages/Inter";
import Advanced from "./pages/Advanced";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/Home"><Home/></Route>
      <Route exact path="/Early">
      <Early/></Route>
     <Route exact path="/Inter"><Inter/></Route>
     <Route exact path="/Advanced"><Advanced/></Route>
     <Route exact path="/Contact"><Contact/></Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
