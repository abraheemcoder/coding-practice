import { useEffect } from "react";

const UseEffectWithNoDependencyArray = () => {
  useEffect(() => {
    console.log("Effect executed with no dependency array");
  });
  return <h2>1. useEffect with no dependency array</h2>;
};

export default UseEffectWithNoDependencyArray;
