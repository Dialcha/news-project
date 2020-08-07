import React from "react";
import Menu from "./components/Menu";
import Noticias from "./components/Noticias";
import MenuContainer from "./containers/MenuContainer";
import NewsContainer from "./containers/NewsContainer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuContainer />
        <br></br>
        <Switch>
          <Route path='/' component={NewsContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
