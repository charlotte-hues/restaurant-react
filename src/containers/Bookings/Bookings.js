import React from "react";
import { PageWrapper } from "../../components/UI/Wrappers/Wrappers";
import { AnimatedPageWrapper } from "../../components/animations/animatedRoutes/animatedRoutes";

class Bookings extends React.Component {
  render() {
    return (
      <AnimatedPageWrapper>
        <h1>Bookings</h1>
        <p>Please Sign in to view your booking</p>
      </AnimatedPageWrapper>
    );
  }
}

export default Bookings;
