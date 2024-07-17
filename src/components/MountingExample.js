import React from "react";

class MountingExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
      console.log('1. Constructor called');
    }
  
    componentDidMount() {
      console.log('3. ComponentDidMount called');
      setTimeout(() => {
        this.setState({ data: 'Loaded data' });
      }, 2000);
    }
  
    render() {
      console.log('2. Render called');
      return <div>{this.state.data ? this.state.data : 'Loading...'}</div>;
    }
  }

  export default MountingExample;