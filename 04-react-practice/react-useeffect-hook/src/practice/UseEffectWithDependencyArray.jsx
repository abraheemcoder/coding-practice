import { useEffect, useState } from "react";

const UseEffectWithDependencyArray = () => {
  const [count, setCount] = useState(0);
  (useEffect(() => {
    console.log("Effect executed with dependency array");
    console.log("Count changed", count);
  }),
    [count]);
  return (
    <>
      <h2>3. useEffect with dependency array</h2>
      <button
        className="px-2 border-2 rounded-xl cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </>
  );
};

export default UseEffectWithDependencyArray;
