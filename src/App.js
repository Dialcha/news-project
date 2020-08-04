import React from "react";
import Menu from "./components/Menu";
import Noticias from "./components/Noticias";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <br></br>
        <Switch>
          <Route path='/:category' children={Noticias}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
