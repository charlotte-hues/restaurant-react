import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout";
import "./App.css";

class App extends React.Component {
  state = {
    clientWidth: null,
    clientHeight: null
  };

  componentDidMount() {
    this.setState({
      clientWidth: document.body.clientWidth,
      clientHeight: document.body.clientHeight
    });
    window.addEventListener("resize", () => {
      this.setState({
        clientWidth: document.body.clientWidth,
        clientHeight: document.body.clientHeight
      });
    });
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/help" render={() => <h1>Help page</h1>} />
        <Route path="/" render={() => <h1>Hues Template with routing</h1>} />
      </Switch>
    );
    return <Layout mobile={this.state.clientWidth <= 500}>{routes}</Layout>;
  }
}

export default App;
