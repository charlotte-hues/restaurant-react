import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--white);
`;

class Layout extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default Layout;
