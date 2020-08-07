import React from "react";
import MenuContainer from "./containers/MenuContainer";
import NewsContainer from "./containers/NewsContainer";
import Loading from "./components/Loading";


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
