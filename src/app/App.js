import React, * as react from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import Comentarios from "./Comentarios";
import Sing_up from "./Sing_up";

function Index() {
  return (
    <div>
      <Login />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/comentarios/" component={Comentarios} />
      <Route path="/sing_up/" component={Sing_up} />
    </Router>
  );
}

export default App;
