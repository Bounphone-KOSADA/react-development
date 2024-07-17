import React from "react";

class UnmountingExample extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer tick");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
    clearInterval(this.timer);
  }

  render() {
    return <div>I will clean up my resources when unmounted</div>;
  }
}

export default UnmountingExample;
