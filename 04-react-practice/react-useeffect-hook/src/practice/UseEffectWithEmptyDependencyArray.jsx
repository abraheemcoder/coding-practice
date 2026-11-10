import { useEffect } from "react";

const UseEffectWithEmptyDependencyArray = () => {
  useEffect(() => {
    (console.log("Effect executed with empty dependency array"), []);
  });
  return <h2>2. useEffect with empty dependency array</h2>;
};

export default UseEffectWithEmptyDependencyArray;
