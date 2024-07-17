import React from 'react';

class UpdatingExample extends React.Component {
    state = { count: 0 };
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log('1. ShouldComponentUpdate called');
      return nextState.count % 2 === 0;
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log('3. ComponentDidUpdate called');
      if (this.state.count !== prevState.count) {
        console.log('Count updated');
      }
    }
  
    increment = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    };
  
    render() {
      console.log('2. Render called');
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
  }

  export default UpdatingExample;