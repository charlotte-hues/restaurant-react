import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/help" render={() => <h1>Help page</h1>} />
        <Route path="/" render={() => <h1>Hues Template with routing</h1>} />
      </Switch>
    );
    return <div className="App">{routes}</div>;
  }
}

export default App;
