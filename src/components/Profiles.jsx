import React, { Component } from "react";

const Profiles = (WrappedData) => {
  class ProfileData extends Component {
    state = {
      username: "pooji",
      age: "22",
      native: "badvel",
    };
    render() {
      return <WrappedData profile={this.state} />;
    }
  }
  return ProfileData;
};

export default Profiles;
