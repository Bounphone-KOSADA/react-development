import { useEffect, useState } from "react";

function HooksLifecycleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran. Count is:", count);

    return () => {
      console.log("Cleanup: Component is unmounting or effect is re-running");
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default HooksLifecycleExample;