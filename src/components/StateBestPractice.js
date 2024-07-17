import { useState } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
}

function ChildComponent({ count, setCount }) {
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <button onClick={increment}>Increment</button>;
}

export default ParentComponent;