import React from "react";
import styled from "styled-components";
import portaitImg from "../assets/images/brooke-lark-unsplash-portrait.jpg";
import landscapeImg from "../assets/images/brooke-lark-unsplash-landscape.jpg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--primary);
  background-size: 100%;
  background: url(${props => (props.mobile ? portaitImg : landscapeImg)})
    no-repeat top center fixed;
`;

class Layout extends React.Component {
  render() {
    return (
      <Wrapper mobile={this.props.mobile}>
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Layout;
