import React from "react";
import styled from "styled-components";
import portaitImg from "../assets/images/brooke-lark-unsplash-portrait.jpg";
import landscapeImg from "../assets/images/brooke-lark-unsplash-landscape.jpg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--white);
  background-size: 100%;
  background: url(${props => (props.mobile ? portaitImg : landscapeImg)})
    no-repeat top center fixed;
`;

class Layout extends React.Component {
  render() {
    return <Wrapper mobile={this.props.mobile}>{this.props.children}</Wrapper>;
  }
}

export default Layout;
