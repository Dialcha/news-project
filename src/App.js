import React from "react";
import MenuContainer from "./containers/MenuContainer";
import NewsContainer from "./containers/NewsContainer";
import NotFound from "./components/NotFound";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MenuContainer />
      <br></br>
      <Switch>
        <Route exact path="/" component={NewsContainer}></Route>
        <Route path="/politica" component={NewsContainer}></Route>
        <Route path="/internacionales" component={NewsContainer}></Route>
        <Route path="/tecnologia" component={NewsContainer}></Route>
        <Route path="/espectaculos" component={NewsContainer}></Route>
        <Route path="/deportes" component={NewsContainer}></Route>
        <Route path="/search/:keyword" component={NewsContainer}></Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
