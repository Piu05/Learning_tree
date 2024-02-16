import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Early from "./pages/Early";
import Inter from "./pages/Inter";
import Advanced from "./pages/Advanced";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path="/early" element={<Early />}/>
      <Route exact path="/inter" element={<Inter />}/>
      <Route exact path="/advanced" element={<Advanced />}/>
      <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
