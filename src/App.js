import React from "react";
import Layout from "./hoc/Layout";
import About from "./containers/About/About";
import Bookings from "./containers/Bookings/Bookings";
import {
  AnimatedRoutesWrapper,
  RouteTransition
} from "./components/animations/animatedRoutes/animatedRoutes";
import "./App.css";
import { Route } from "react-router-dom";

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
      <AnimatedRoutesWrapper>
        <Route path="/bookings" component={Bookings} />
        <Route path="/" component={About} />
      </AnimatedRoutesWrapper>
    );
    return <Layout mobile={this.state.clientWidth <= 500}>{routes}</Layout>;
  }
}

export default App;
